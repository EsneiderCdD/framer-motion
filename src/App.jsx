import { motion } from "framer-motion";
function App () {
  return (
    <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center",}}>
      <h1>Vamos a construir interactuar con nuestro FM</h1>

            <motion.div
        style={{ width: 150, height: 150, backgroundColor: "red"}}
        initial = {{ x : -200, y: 110 }}
        animate = {{ x : 0, y: 0 }}
        transition={{ duration: 1, repeat: Infinity }}
        // initial={{scale: 1, rotate: 0, borderRadius: "0%"}}
        // animate={{scale: [1, 2, 2, 1, 1], rotate: [0, 0, 270, 270, 0], borderRadius: ["0%", "0%", "50%", "50%", "0%"]}}
        // transition={{duration: 2, repeat: Infinity, repeatType: "reverse"}}
        >

      </motion.div>

      <motion.div
        style={{ width: 150, height: 150, backgroundColor: "blue"}}
        initial={{scale: 1, rotate: 0, borderRadius: "0%"}}
         animate={{scale: [1, 2, 2, 1, 1], rotate: [0, 0, 270, 270, 0], borderRadius: ["0%", "0%", "50%", "50%", "0%"]}}
         transition={{duration: 2, repeat: Infinity, repeatType: "reverse"}}
         >
      </motion.div>

      
    </div>
  );
}
export default App;