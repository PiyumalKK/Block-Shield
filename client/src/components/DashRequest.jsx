import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CircularProgressbar } from "react-circular-progressbar";
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage";
import { app } from "../firebase";
import { Alert, Button, FileInput, Label, Spinner, TextInput } from "flowbite-react";
import { motion } from "framer-motion";

function SignUp() {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [file, setFile] = useState(null);
  const [imageUploadProgress, setImageUploadProgress] = useState(null);
  const [imageUploadError, setImageUploadError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleUploadImage = async () => {
    try {
      if (!file) {
        setImageUploadError('Please select a file');
        return;
      }

      setImageUploadError(null);
      const storage = getStorage(app);
      const fileName = new Date().getTime() + '-' + file.name;
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setImageUploadProgress(progress.toFixed(0));
        },
        // eslint-disable-next-line no-unused-vars
        (error) => {
          setImageUploadError("File upload failed");
          setImageUploadProgress(null);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setImageUploadProgress(null);
            setImageUploadError(null);
            setFormData({ ...formData, file: downloadURL });
          });
        }
      );
    } catch (error) {
      setImageUploadError("File upload failed");
      setImageUploadProgress(null);
      console.error(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.GitHubRepositoryLink || !formData.em) {
      setErrorMessage('Please fill out all required fields');
      return;
    }

    try {
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch('/api/request/createreq', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || 'Failed to create request');
      }

      setLoading(false);
      navigate(`/reqpage/${data.slug}`); // Redirect after successful submission

    } catch (error) {
      setErrorMessage(error.message || 'Failed to create request');
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-auto mt-5 mb-5 min-h-screen items-center justify-center bg-gray-50 dark:bg-gray-900">
      <motion.div
        className="w-full max-w-4xl mx-auto p-6 bg-white dark:bg-gray-800 shadow-lg rounded-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-2xl font-bold mb-6  text-teal-700 dark:text-gray-300 text-center">
          Thank you for choosing BlockShield for your smart contract auditing needs
        </h1>
        
        <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
            Please provide the following information:
          </p>
          
          <div>
            <Label value="GitHub Repository Link:" className="text-gray-700 dark:text-gray-300" />
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
              URL to the GitHub repository containing the smart contract code
            </p>
            <TextInput
              type="text"
              placeholder="GitHub Repository Link"
              id="GitHubRepositoryLink"
              onChange={handleChange}
              className="border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            />
          </div>
          
          <div>
            <Label value="Documentation:" className="text-gray-700 dark:text-gray-300" />
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">- Whitepaper</p>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">- Technical Documentation</p>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">- User Guides</p>
            <TextInput
              type="text"
              placeholder="Documentation"
              id="Documentation"
              onChange={handleChange}
              className="border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            />
          </div>
          
          <div>
            <Label value="Smart Contract Deployment Information:" className="text-gray-700 dark:text-gray-300" />
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">- Deployment Scripts</p>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">- Contract Addresses (mainnet and testnets)</p>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">- ABI (Application Binary Interface)</p>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">- Environment Configuration</p>
            <TextInput
              type="text"
              placeholder="Smart Contract Deployment Information"
              id="scdi"
              onChange={handleChange}
              className="border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            />
            <div className="flex gap-4 items-center justify-between border-4 border-teal-500 border-dotted p-3 mt-4">
              <FileInput type="file" accept="*" onChange={(e) => setFile(e.target.files[0])} />
              <Button
                type="button"
                gradientDuoTone="purpleToBlue"
                size="sm"
                outline
                onClick={handleUploadImage}
                disabled={imageUploadProgress}
              >
                {imageUploadProgress ? (
                  <div className="w-16 h-16">
                    <CircularProgressbar value={imageUploadProgress} text={`${imageUploadProgress || 0}%`} />
                  </div>
                ) : (
                  "Upload .Sol"
                )}
              </Button>
            </div>
            {imageUploadError && <Alert color="failure">{imageUploadError}</Alert>}
            {formData.image && (
              <img src={formData.image} alt="Upload" className="w-full h-72 object-cover mt-4 rounded-lg" />
            )}
          </div>
          
          <div>
            <Label value="Access to Test Environments:" className="text-gray-700 dark:text-gray-300" />
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">- Details of testnets or sandbox environments</p>
            <TextInput
              type="text"
              placeholder="Access to Test Environments"
              id="ate"
              onChange={handleChange}
              className="border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            />
          </div>
          
          <div>
            <Label value="Previous Security Audits and Reviews:" className="text-gray-700 dark:text-gray-300" />
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">- Reports from previous audits and reviews</p>
            <TextInput
              type="text"
              placeholder="Previous Security Audits and Reviews"
              id="psar"
              onChange={handleChange}
              className="border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            />
          </div>
          
          <div>
            <Label value="Risk Assessment and Threat Model:" className="text-gray-700 dark:text-gray-300" />
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">- Documentation outlining potential risks and the threat model</p>
            <TextInput
              type="text"
              placeholder="Risk Assessment and Threat Model"
              id="ratm"
              onChange={handleChange}
              className="border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            />
          </div>
          
          <div>
            <Label value="Project Details:" className="text-gray-700 dark:text-gray-300" />
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">- Information about the project team</p>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">- Timeline for the audit</p>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">- Specific use cases for the smart contract</p>
            <TextInput
              type="text"
              placeholder="Project Details"
              id="pd"
              onChange={handleChange}
              className="border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            />
          </div>

          <div className="border-t-2 border-gray-300 dark:border-gray-600 pt-4 mt-6">
            <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4">Contact Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label value="Email" className="text-gray-700 dark:text-gray-300" />
                <TextInput
                  type="email"
                  placeholder="Email Address"
                  id="em"
                  onChange={handleChange}
                  className="border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                />
              </div>
              <div>
                <Label value="Slack" className="text-gray-700 dark:text-gray-300" />
                <TextInput
                  type="text"
                  placeholder="Slack Username"
                  id="su"
                  onChange={handleChange}
                  className="border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                />
              </div>
              <div>
                <Label value="Telegram" className="text-gray-700 dark:text-gray-300" />
                <TextInput
                  type="text"
                  placeholder="Telegram Username"
                  id="tu"
                  onChange={handleChange}
                  className="border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                />
              </div>
              <div>
                <Label value="Any Other Method" className="text-gray-700 dark:text-gray-300" />
                <TextInput
                  type="text"
                  placeholder="Any Other Method"
                  id="Aom"
                  onChange={handleChange}
                  className="border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                />
              </div>
            </div>
          </div>
          
          <Button gradientDuoTone="purpleToPink" type="submit" disabled={loading}>
            {loading ? (
              <>
                <Spinner size="sm" />
                <span className="pl-3">Loading...</span>
              </>
            ) : (
              "Submit"
            )}
          </Button>
        </form>
        
        {errorMessage && (
          <Alert className="mt-5" color="failure">
            {errorMessage}
          </Alert>
        )}
      </motion.div>
    </div>
  );
}

export default SignUp;
