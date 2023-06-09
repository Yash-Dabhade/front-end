import { TypeAnimation } from "react-type-animation";

const Typer = () => {
  return (
    <TypeAnimation
      sequence={[
        "Hello ! My Self Yash Dabhade ...  🙋‍♂️ ", // Types 'One'
        1000, // Waits 1s
        "FULL STACK MERN WEB APP DEVELOPER 👨‍💻 with hands on experience on live projects 🌎 ", // Deletes 'One' and types 'Two'
        2000, // Waits 2s
        "Passionate programmer with an aim 🎯 to create a positive impact on the society... 🌟",
        2000,
        "3rd Year CSE Student  🧑‍🎓  At Pillai College Of Engineering, New Panvel ",
        2000,
        () => {
          // Place optional callbacks anywhere in the array
        },
      ]}
      wrapper="div"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: "2em" }}
    />
  );
};

export default Typer;
