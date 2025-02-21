import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MyContext } from "../../context/MyContext";

const MlmDetails = () => {
  const { API_BASE_URL_NODE, singleNewMlmUser, getSingleNewMlmUser } =
    useContext(MyContext);
  const [status, setStatus] = useState("");
  const { id } = useParams();
  useEffect(() => {
    getSingleNewMlmUser(id);
  }, [id]);

  console.log(singleNewMlmUser);

  const handleStatusChange = (status) => {
    setStatus(status);
    axios
      .put(`${API_BASE_URL_NODE}api/admin/statusMLM/${id}`, { status })
      .then((result) => {
        console.log(result);
        alert("MLM Member status updated successfully.");
      })
      .catch((error) => {
        console.log(error);
        alert("Error while updating MLM member status.");
      });
  };

  return (
    <div className="bg-gray-100 p-6 flex justify-center items-center">
      <div className="bg-white rounded-xl shadow-xl p-8  w-full">
        {/* Header */}
        <div className="flex justify-between items-center border-b pb-4">
          <h2 className="text-2xl font-bold text-gray-800">
            {singleNewMlmUser?.userDetail?.first_name}
          </h2>
        </div>

        {/* User Information */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
          {/* Details Section */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-gray-700">
              MLM User Details
            </h3>
            <div className="text-gray-600 space-y-2">
              <p>
                <strong className="font-medium text-gray-800">ID:</strong>{" "}
                {singleNewMlmUser?.user_Id}
              </p>
              <p>
                <strong className="font-medium text-gray-800">
                  Full Name:
                </strong>{" "}
                {singleNewMlmUser?.userDetail?.first_name}
              </p>
              <p>
                <strong className="font-medium text-gray-800">
                  Transaction ID:
                </strong>{" "}
                {singleNewMlmUser?.transition_id}
              </p>
              <p>
                <strong className="font-medium text-gray-800">Mobile:</strong>{" "}
                {singleNewMlmUser?.userDetail?.mobile_number}
              </p>
              <p>
                <strong className="font-medium text-gray-800">Status:</strong>{" "}
                {singleNewMlmUser?.MLMStatus}
              </p>
            </div>
          </div>
          {/* User Image */}
          <div className="flex justify-center">
            <img
              src={`https://api.ourmicrolife.com/uploads/vendor/${singleNewMlmUser?.image}`}
              alt="User"
              className="w-32 h-32 rounded-lg object-cover shadow-md border border-gray-200"
            />
          </div>
        </div>

        {/* Action Buttons */}
        {singleNewMlmUser?.MLMStatus === "pending" ||
        singleNewMlmUser?.MLMStatus === "rejected" ? (
          <div className="mt-6 flex justify-end space-x-4">
            <button
              onClick={() => handleStatusChange("accepted")}
              className="bg-green-600 text-white font-medium py-2 px-5 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:bg-green-700 focus:outline-none"
            >
              Accept
            </button>
            <button
              onClick={() => handleStatusChange("rejected")}
              className="bg-red-500 text-white font-medium py-2 px-5 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:bg-red-600 focus:outline-none"
            >
              Reject
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default MlmDetails;
