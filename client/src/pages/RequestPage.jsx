/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Alert, Spinner, Card, Button, Modal } from "flowbite-react";
import { motion } from "framer-motion";
import { FaGithub, FaFileAlt, FaInfoCircle, FaEnvelope, FaSlack, FaTelegram, FaEdit, FaTrash } from "react-icons/fa";
import { HiOutlineExclamationCircle } from 'react-icons/hi';
import { useSelector } from "react-redux";



function SubmissionDetails() {
  const { slug } = useParams();
  const [submissionData, setSubmissionData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [requestIdToDelete, setRequestIdToDelete] = useState('');
  const { currentUser } = useSelector((state) => state.user);
  // eslint-disable-next-line no-unused-vars
  const [userRequests, setUserRequests] = useState([]);

  useEffect(() => {
    const fetchSubmissionData = async () => {
      try {
        const res = await fetch(`/api/request/getreq?slug=${slug}`);
        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.message || "Failed to fetch submission details");
        }

        setSubmissionData(data.requests[0]);
      } catch (error) {
        setErrorMessage(error.message || "Failed to fetch submission details");
      } finally {
        setLoading(false);
      }
    };

    fetchSubmissionData();
  }, [slug]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Spinner size="xl" />
      </div>
    );
  }

  if (errorMessage) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Alert color="failure">{errorMessage}</Alert>
      </div>
    );
  }

  const handleDeleteRequest = async () => {
    setShowModal(false);
    try {
      const res = await fetch(`/api/request/deletereq/${requestIdToDelete}/${currentUser._id}`, {
        method: 'DELETE',
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        setUserRequests((prev) =>
          prev.filter((request) => request._id !== requestIdToDelete)
        );
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Card>
            <h1 className="text-3xl font-bold mb-6 text-center text-gray-700 dark:text-gray-300">
              Submission Details
            </h1>
            <div className="grid grid-cols-1 gap-6">
              <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md flex items-center">
                <FaGithub className="text-2xl mr-4 text-gray-600 dark:text-gray-400" />
                <div>
                  <h2 className="font-semibold text-lg">GitHub Repository Link</h2>
                  <a
                    href={submissionData?.GitHubRepositoryLink}
                    className="text-blue-600 dark:text-blue-400 break-all"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {submissionData?.GitHubRepositoryLink}
                  </a>
                </div>
              </div>
              <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md flex items-center">
                <FaFileAlt className="text-2xl mr-4 text-gray-600 dark:text-gray-400" />
                <div>
                  <h2 className="font-semibold text-lg">Documentation</h2>
                  <p>{submissionData?.Documentation}</p>
                </div>
              </div>
              <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md flex items-center">
                <FaFileAlt className="text-2xl mr-4 text-gray-600 dark:text-gray-400" />
                <div>
                  <h2 className="font-semibold text-lg">Smart Contract Deployment Information</h2>
                  <p>{submissionData?.scdi}</p>
                </div>
              </div>
              <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md flex items-center">
                <FaFileAlt className="text-2xl mr-4 text-gray-600 dark:text-gray-400" />
                <div>
                  <h2 className="font-semibold text-lg">Access to Test Environments</h2>
                  <p>{submissionData?.ate}</p>
                </div>
              </div>
              <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md flex items-center">
                <FaFileAlt className="text-2xl mr-4 text-gray-600 dark:text-gray-400" />
                <div>
                  <h2 className="font-semibold text-lg">Previous Security Audits and Reviews</h2>
                  <p>{submissionData?.psar}</p>
                </div>
              </div>
              <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md flex items-center">
                <FaFileAlt className="text-2xl mr-4 text-gray-600 dark:text-gray-400" />
                <div>
                  <h2 className="font-semibold text-lg">Risk Assessment and Threat Model</h2>
                  <p>{submissionData?.ratm}</p>
                </div>
              </div>
              <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md flex items-center">
                <FaFileAlt className="text-2xl mr-4 text-gray-600 dark:text-gray-400" />
                <div>
                  <h2 className="font-semibold text-lg">Project Details</h2>
                  <p>{submissionData?.pd}</p>
                </div>
              </div>
              <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md flex items-center">
                <FaFileAlt className="text-2xl mr-4 text-gray-600 dark:text-gray-400" />
                <div>
                  <h2 className="font-semibold text-lg">Uploaded File</h2>
                  {submissionData?.file ? (
                    <div>
                      <Button gradientDuoTone="purpleToBlue" size="sm" className="mt-2">
                        <a href={submissionData.file} target="_blank" rel="noopener noreferrer">
                          Download File
                        </a>
                      </Button>
                    </div>
                  ) : (
                    <p className="text-gray-600 dark:text-gray-400">No file uploaded</p>
                  )}
                </div>
              </div>
              <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md flex items-center">
                <FaEnvelope className="text-2xl mr-4 text-gray-600 dark:text-gray-400" />
                <div>
                  <h2 className="font-semibold text-lg">Contact Details</h2>
                  <p>
                    <FaEnvelope className="text-lg mr-2 text-gray-600 dark:text-gray-400" />
                    <strong>Email:</strong> {submissionData?.em}
                  </p>
                  <p>
                    <FaSlack className="text-lg mr-2 text-gray-600 dark:text-gray-400" />
                    <strong>Slack:</strong> {submissionData?.su}
                  </p>
                  <p>
                    <FaTelegram className="text-lg mr-2 text-gray-600 dark:text-gray-400" />
                    <strong>Telegram:</strong> {submissionData?.tu}
                  </p>
                  <p>
                    <FaInfoCircle className="text-lg mr-2 text-gray-600 dark:text-gray-400" />
                    <strong>Other:</strong> {submissionData?.Aom}
                  </p>
                </div>
              </div>
            </div>

            {/* Update and Delete Buttons */}
            <div className="flex justify-end mt-6">
              <Button
                className="mr-2"
                gradientDuoTone="greenToCyan"
                onClick={() => console.log("Update clicked")} // Replace with update function
              >
                <FaEdit className="mr-2" />
                Update
              </Button>
              <Button
                gradientDuoTone="redToOrange"
                onClick={handleDeleteRequest}
              >
                <FaTrash className="mr-2" />
                Delete
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>

      {/* Modal for additional information */}
      <Modal show={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <Modal.Header>Additional Information</Modal.Header>
        <Modal.Body>
          <div className="space-y-4">
            <p>{/* Additional information here */}</p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setIsModalOpen(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
      <Modal show={showModal} onClose={() => setShowModal(false)} popup size='md'>
        <Modal.Header />
        <Modal.Body>
          <div className='text-center'>
            <HiOutlineExclamationCircle className='h-14 w-14 text-gray-400 dark:text-gray-200 mb-4 mx-auto' />
            <h3 className='mb-5 text-lg text-gray-500 dark:text-gray-400'>
              Are you sure you want to delete this request?
            </h3>
            <div className='flex justify-center gap-5'>
              <Button color='failure' onClick={handleDeleteRequest}>
                Yes, I'm Sure
              </Button>
              <Button color='gray' onClick={() => setShowModal(false)}>
                No, Cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default SubmissionDetails;
