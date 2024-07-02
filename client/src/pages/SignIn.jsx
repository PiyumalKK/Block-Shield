/* eslint-disable react/no-unescaped-entities */
import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signInStart, signInSuccess, signInFailure } from "../redux/user/userSlice";
import OAuth from "../components/OAuth";
import { motion } from "framer-motion";

function SignIn() {
  const [formData, setFormData] = useState({});
  const { loading, error: errorMessage } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      return dispatch(signInFailure("Please fill out all required fields"));
    }

    try {
      dispatch(signInStart());
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (data.success === false) {
        dispatch(signInFailure(data.message));
      }

      if (res.ok) {
        dispatch(signInSuccess(data));
        navigate("/");
      }
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 overflow-hidden">
      <div className="flex p-3 max-w-4xl mx-auto flex-col md:flex-row md:items-center gap-8 bg-white dark:bg-gray-800 shadow-md rounded-lg relative z-10">
        {/* Left */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center">
            <Link to="/" className="text-6xl font-bold text-gray-800 dark:text-white flex items-center">
            <img className="mt-6 h-24 w-auto lg:h-32" src="https://firebasestorage.googleapis.com/v0/b/mern-blog-2579f.appspot.com/o/logo%20B.svg?alt=media&token=2c6c3803-8227-493b-9bd7-ff228e881bd3" alt="Logo" />
              
            </Link>
          </div>

          <motion.div
            className="mt-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-xl text-center ml-3 mr-3 font-semibold bg-gradient-to-r from-purple-700 to-blue-400 bg-clip-text text-transparent dark:from-green-400 dark:to-blue-500">
              Welcome to Sri Lanka's First Blockchain Smart Contract Auditing Company!
            </h1>
          </motion.div>
          
        </motion.div>

        {/* Right */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <form className="flex flex-col gap-4 p-6 bg-gray-100 dark:bg-gray-700 rounded-lg" onSubmit={handleSubmit}>
            <p className="text-sm mt-2 text-gray-600 dark:text-gray-300">
              You can sign in with your email and password or with your Google account!
            </p>
            <div>
              <Label value="Your Email" className="text-gray-700 dark:text-gray-300" />
              <TextInput
                type="email"
                placeholder="name@example.com"
                id="email"
                onChange={handleChange}
                className="border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              />
            </div>
            <div>
              <Label value="Your Password" className="text-gray-700 dark:text-gray-300" />
              <TextInput
                type="password"
                placeholder="**********"
                id="password"
                onChange={handleChange}
                className="border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              />
            </div>
            <Button gradientDuoTone="purpleToBlue" type="submit" disabled={loading}>
              {loading ? (
                <>
                  <Spinner size="sm" />
                  <span className="pl-3">Loading....</span>
                </>
              ) : (
                "Sign In"
              )}
            </Button>
            <OAuth />
          </form>
          <div className="flex gap-2 text-sm mt-5 text-gray-600 dark:text-gray-300">
            <span>Don't Have an account?</span>
            <Link to="/sign-up" className="text-blue-500 dark:text-blue-400">
              Sign Up
            </Link>
          </div>
          {errorMessage && (
            <Alert className="mt-5" color="failure">
              {errorMessage}
            </Alert>
          )}
        </motion.div>
      </div>
    </div>
  );
}

export default SignIn;
