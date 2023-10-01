import React from "react";
import NewMeetupForm from "@/components/meetups/NewMeetupForm";

const index = () => {
  function addMeetUpHandler(enterdMeetupData) {
    console.log(enterdMeetupData);
  }

  return (
    <div>
      <NewMeetupForm onADdMeetup={addMeetUpHandler} />
    </div>
  );
};

export default index;
