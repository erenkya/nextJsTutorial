import MeetupList from "@/components/meetups/MeetupList";
import { useEffect, useState } from "react";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/KeizersgrachtReguliersgrachtAmsterdam.jpg/1200px-KeizersgrachtReguliersgrachtAmsterdam.jpg",
    address: "Some address 5, 12345 Some City",
    description: "This is a first meetup!",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://www.investopedia.com/thmb/uSjO_BX5Jl550BBLNla1QGFmZ5c=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/LowerManhattanSkyline-900c48d4f1064a97893dbc1548d775e1.jpg",
    address: "Some address 10, 12345 Some City",
    description: "This is a second meetup!",
  },
];

const HomePage = (props) => {
  return <MeetupList meetups={props.meetups} />;
};

// export async function getStaticProps() {
//   // Fetch data from an API or other source

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//     revalidate: 10,
//   };
// }

export async function getServerSideProps(context) {
  const req = context.req;
  const res = context.res;

  // Fetch data from an API or other source

  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
  };
}

// export async function getStaticProps() {
//   return {
//     props: {
//       meetupData: {
//         id: "m1",
//         title: "A First Meetup",
//         image:
//           "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/KeizersgrachtReguliersgrachtAmsterdam.jpg/1200px-KeizersgrachtReguliersgrachtAmsterdam.jpg",
//         address: "Some address 5, 12345 Some City",
//         description: "This is a first meetup!",
//       },
//     },
//   };
// }

export default HomePage;
