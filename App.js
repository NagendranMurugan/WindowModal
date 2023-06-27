
import Modal from "./modal";

import { useState } from "react";

const App = () => {

  const [modalOn, setModalOn] = useState(false);
 

  const clicked = () => {
    setModalOn(true)
  }

  return (
    <div>

      <div className="flex justify-center">
        <div className="flex   cursor-pointer justify-center w-1/3  bg-blue-400 p-4  m-6 rounded-md text-white"
        
          onClick={clicked}
        >
          click me
        </div>
      </div>

      {modalOn && < Modal setModalOn={setModalOn} />}

    </div>

  );
}

export default App;









