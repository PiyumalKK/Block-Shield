/* eslint-disable react/no-unescaped-entities */
import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import OAuth from "../components/OAuth";

function SignUp() {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.username || !formData.email || !formData.password) {
      return setErrorMessage('Please fill out all required fields');
    } 

    try {
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (data.success === false) {
        return setErrorMessage(data.message);
      }
      setLoading(false);

      if (res.ok) {
        navigate('/sign-in');
      }

    } catch (error) {
      setErrorMessage(error.message);
      setLoading(false);
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
              <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
                Block
              </span>
              <span className="ml-2 text-6xl">Shield</span>
            </Link>
          </div>

          <motion.div
            className="mt-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-xl ml-3 mr-3 text-center font-semibold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent dark:from-green-400 dark:to-blue-500">
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
              You can sign up with your email and password or with your Google account!
            </p>
            <div>
              <Label value="Your Username" className="text-gray-700 dark:text-gray-300" />
              <TextInput
                type="text"
                placeholder="Username"
                id="username"
                onChange={handleChange}
                className="border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              />
            </div>
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
            <Button gradientDuoTone="purpleToPink" type="submit" disabled={loading}>
              {loading ? (
                <>
                  <Spinner size="sm" />
                  <span className="pl-3">Loading....</span>
                </>
              ) : (
                "Sign Up"
              )}
            </Button>
            <OAuth />
          </form>
          <div className="flex gap-2 text-sm mt-5 text-gray-600 dark:text-gray-300">
            <span>Have an account already?</span>
            <Link to="/sign-in" className="text-blue-500 dark:text-blue-400">
              Sign In
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

export default SignUp;
