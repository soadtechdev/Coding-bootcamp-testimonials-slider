import React, { useState } from "react";
import QuoteContainer from "./components/QuoteContainer";
import ImageContainer from "./components/ImageContainer";
import { users } from "./config/users";

import "./css/main.css";
import "./css/reset.css";

function App() {
  const [userSelect, setUserSelect] = useState(0);
  const [animation, setAnimation] = useState(false);

  return (
    <div className="app">
      <QuoteContainer
        quote={users[userSelect].quote}
        name={users[userSelect].name}
        profession={users[userSelect].profession}
        animation={animation}
      />
      <ImageContainer
        image={users[userSelect].image}
        userSelect={userSelect}
        setUserSelect={setUserSelect}
        users={users}
        animation={animation}
        setAnimation={setAnimation}
      />
    </div>
  );
}

export default App;
