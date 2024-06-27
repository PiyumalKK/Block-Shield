/* eslint-disable react/no-unescaped-entities */
import { Button, Modal, Table } from "flowbite-react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { HiOutlineExclamationCircle } from 'react-icons/hi';
import { Link } from "react-router-dom";

export default function DashRequests() {
  const { currentUser } = useSelector((state) => state.user);
  const [userRequests, setUserRequests] = useState([]);
  const [showMore, setShowMore] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [requestIdToDelete, setRequestIdToDelete] = useState('');

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const res = await fetch(`/api/request/getreq`);
        const data = await res.json();
        if (res.ok) {
          setUserRequests(data.requests);
          if (data.requests.length < 9) {
            setShowMore(false);
          }
        } else {
          console.log(data.message);
        }
      } catch (error) {
        console.log(error.message);
      }
    };

    if (currentUser && currentUser.isAdmin) {
      fetchRequests();
    }
  }, [currentUser]);

  const handleShowMore = async () => {
    const startIndex = userRequests.length;
    try {
      const res = await fetch(`/api/request/getreq?startIndex=${startIndex}`);
      const data = await res.json();
      if (res.ok) {
        setUserRequests((prev) => [...prev, ...data.requests]);
        if (data.requests.length < 9) {
          setShowMore(false);
        }
      }
    } catch (error) {
      console.log(error.message);
    }
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
    <div className="table-auto overflow-x-scroll md:mx-auto p-3 scrollbar scrollbar-track-slate-100 
      scrollbar-thumb-slate-300 dark:scrollbar-track-slate-700 dark:scrollbar-thumb-slate-500">
      {currentUser.isAdmin && userRequests.length > 0 ? (
        <>
          <Table hoverable className="shadow-md">
            <Table.Head>
              <Table.HeadCell>Date Updated</Table.HeadCell>
              <Table.HeadCell>User Email</Table.HeadCell>
              <Table.HeadCell>Uploaded File</Table.HeadCell>
              <Table.HeadCell>GitHubRepositoryLink</Table.HeadCell>
              <Table.HeadCell>Delete</Table.HeadCell>
            </Table.Head>
            <Table.Body>
              {userRequests.map((request) => (
                <Table.Row key={request._id}>
                  <Table.Cell>{new Date(request.updatedAt).toLocaleDateString()}</Table.Cell>

                  <Table.Cell>
  <a href={`mailto:${request.em}`} target="_blank" rel="noopener noreferrer">
    {request.em}
  </a>
</Table.Cell>

                  
                  <Table.Cell>
                    {request.file ? (
                      <Button gradientDuoTone="purpleToBlue" size="sm">
                        <a href={request.file} target="_blank" rel="noopener noreferrer">
                          Download File
                        </a>
                      </Button>
                    ) : (
                      <p>No file uploaded</p>
                    )}
                  </Table.Cell>
                  <Table.Cell>
                    <a href={request.GitHubRepositoryLink} target="_blank" rel="noopener noreferrer">
                      {request.GitHubRepositoryLink}
                    </a>
                  </Table.Cell>
                  <Table.Cell>
                    <Button color='danger' onClick={() => {
                      setRequestIdToDelete(request._id);
                      setShowModal(true);
                    }}>
                      Delete
                    </Button>
                  </Table.Cell>

                  <Table.Cell>
                    <Link className="font-medium text-gray-900 dark:text-white" to={`/reqpage/${request.slug}`}>
                      See Submission
                    </Link>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
          {showMore && (
            <button onClick={handleShowMore} className="w-full text-teal-500 self-center text-sm py-7">
              Show more
            </button>
          )}
        </>
      ) : (
        <p>You have no requests yet</p>
      )}

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
