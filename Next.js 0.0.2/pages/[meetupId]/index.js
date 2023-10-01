import React from "react";
import { useRouter } from "next/router";

function Meetup() {
  const router = useRouter();
  const { meetupId } = router.query;

  return (
    <React.Fragment>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/KeizersgrachtReguliersgrachtAmsterdam.jpg/1200px-KeizersgrachtReguliersgrachtAmsterdam.jpg"
        alt=""
      />
      <h1>A first meetup</h1>
      <p>The meetup description</p>
      <address>The meetup address</address>
      <div>Meetup id:{meetupId}</div>
    </React.Fragment>
  );
}

export default Meetup;
