import user from "./user_Model.js";
import bcrypt from "bcrypt";

const userController = {
  userSignup: async (req, res) => { 
    try {
      const { fullname, email, password } = req.body;
      if (!fullname || !email || !password) {
        return res.status(404).json({ message: "All fields are required" });
      }
      const existinguser = await user.findOne({ where: { email } });
      if (existinguser) {
        return res.status(404).json({ message: "User All ready exists" });
      }
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = await user.create({
        fullname,
        email,
        password: hashedPassword,
      });
      console.log("user created successsfully");
      return res
        .status(200)
        .json({ message: "user created successfully", data: newUser }); 
    } catch (error) {
      console.log("Error in creating user", error.message);
      return res.status(500).json({ message: "Internal server error" });
    }
  },
  userLogin: async (req, res) => {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        return res.status(400).json({ message: "All fields are required" });
      }

      const userRecord = await user.findOne({ where: { email } });
      if (!userRecord) {
        return res.status(404).json({ message: "User not found" });
      }

      const isMatch = await bcrypt.compare(password, userRecord.password);
      if (!isMatch) {
        return res.status(401).json({ message: "Invalid credentials" });
      }

      console.log("User logged in successfully");
      return res.status(200).json({
        message: "User logged in successfully",
        email: userRecord.email,
      }); 
    } catch (error) {
      console.log("Error in login", error.message);
      return res.status(500).json({ message: "Internal server error" });
    }
  },
};

export default userController;
