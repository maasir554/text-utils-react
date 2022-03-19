export default function About(props) {
  return (
    <>
      <div
        className={`rounded-3 border mb-3 border-2 border-${
          props.Theme
        } container p-3 bg-opacity-10 bg-${props.Theme} text-${() =>
          props.DarkLightInverse}`}
      >
        <h2 className="text-center">About the Project</h2>
        <p className="text-center p-4">
          I made this project wihle I was learning{" "}
          <span className="fw-bold text-decoration-underline">React.js</span>{" "}
          This is completely built from scratch and{" "}
          <span className="fw-bold text-decoration-underline">
            All the button-click functions{" "}
          </span>{" "}
          are written by me eg : Theme , Light/Dark Mode, etc.
        </p>
        <hr />
        <p className="text-center">
          I will move forward and learn Redux to make evn more intresting
          projects!
        </p>
      </div>

      <div
        className={`rounded-3 border mb-3 border-2 border-${
          props.Theme
        } container p-3 bg-opacity-10 bg-${props.Theme} text-${() =>
          props.DarkLightInverse}`}
      >
        <h2 className="text-center">Our Vision</h2>
        <p className="text-center p-4">
          This Project will make{" "}
          <span className="fw-bold text-decoration-underline">
            text-editing
          </span>{" "}
          and{" "}
          <span className="fw-bold text-decoration-underline">
            manupulating
          </span>{" "}
          fun and easy to do. with TextUtils text analysis and manupulation will
          be simplified and more efficient.
        </p>
        <hr />
        <p className="text-center">
          TextUtils will make text manupulation easier.
        </p>
      </div>
      <div
        className={`rounded-3 border mb-3 border-2 border-${
          props.Theme
        } container p-3 bg-opacity-10 bg-${props.Theme} text-${() =>
          props.DarkLightInverse}`}
      >
        <h2 className="text-center">Project To be continued...</h2>
        <p className="text-center p-4">
          In future, this project will be modified to a{" "}
          <span className="fw-bold text-decoration-underline">
            Rich Text Editor
          </span>{" "}
          After i learn complete MERN stack or MEAN stack , and , most
          importantly, advanced JavaScript
        </p>
        <hr />
        <p className="text-center">
          similar projects avalible on my Github Page github.com/maasir554
        </p>
      </div>
    </>
  );
}
