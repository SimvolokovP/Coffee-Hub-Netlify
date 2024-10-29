import useTg from "../../hooks/useTg";

const Greeting = () => {
  const { user } = useTg();

  const getUsername = () => {
    if (user) {
      return (
        user?.username ||
        `${user?.first_name || ""} ${user?.last_name || ""}`.trim()
      );
    }
    return "Unknown";
  };
  
  return (
    <h1 className="main-title products-page__title">
      Hello, <span className="accent">{getUsername()}!</span> It’s a Great{" "}
      <span className="accent">Day For Coffee</span>
    </h1>
  );
};

export default Greeting;
