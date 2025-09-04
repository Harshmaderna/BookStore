import user from "./user_model.js";

const userController = {
  SignupUser: async (req, res) => {
    try {
      const { fullName, email, password } = req.body;
      if (!fullName || !email || !password) {
        return res.status(400).json({ message: "All fields are required." });
      }
      const existingUser = await user.findOne({ where: { email } });
      if (existingUser) {
        return res.status(404).json({ message: "User already exists." });
      }
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = await user.create({
        fullName,
        email,
        password: hashedPassword,
      });
      return res
        .status(200)
        .json({ message: "Signup Successfull", data: newUser });
    } catch (error) {
      console.error("Signup error:", error);
      return res.status(500).json({ message: "Internal server error." });
    }
  },
};

export default userController
