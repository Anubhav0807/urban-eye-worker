import { createContext, useReducer } from "react";

export const ComplaintsContext = createContext({
  assignedComplaints: [],
  newComplaints: [],
  setAssignedComplaints: (complaints) => {},
  setNewComplaints: (complaints) => {},
  assignComplaint: (complaint) => {},
});

function complaintReducer(state, action) {
  switch (action.type) {
    case "SET_ASSIGNED":
      return { ...state, assignedComplaints: [...action.payload].reverse() };
    case "SET_NEW":
      return { ...state, newComplaints: [...action.payload].reverse() };
    case "ASSIGN":
      const updatedComplaint = {
        ...action.payload,
        status: "In Progress",
      };
      return {
        ...state,
        assignedComplaints: [updatedComplaint, ...state.assignedComplaints],
        newComplaints: state.newComplaints.filter(
          (complaint) => complaint.id != updatedComplaint.id,
        ),
      };
    default:
      return state;
  }
}

function ComplaintsContextProvider({ children }) {
  const [complaintsState, dispatch] = useReducer(complaintReducer, {
    assignedComplaints: [],
    newComplaints: [],
  });

  function setAssignedComplaints(complaints) {
    dispatch({ type: "SET_ASSIGNED", payload: complaints });
  }

  function setNewComplaints(complaints) {
    dispatch({ type: "SET_NEW", payload: complaints });
  }

  function assignComplaint(complaint) {
    dispatch({ type: "ASSIGN", payload: complaint });
  }

  const value = {
    assignedComplaints: complaintsState.assignedComplaints,
    newComplaints: complaintsState.newComplaints,
    setAssignedComplaints: setAssignedComplaints,
    setNewComplaints: setNewComplaints,
    assignComplaint: assignComplaint,
  };

  return (
    <ComplaintsContext.Provider value={value}>
      {children}
    </ComplaintsContext.Provider>
  );
}

export default ComplaintsContextProvider;
