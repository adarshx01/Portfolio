"use client";
import React from "react";
import { CardSpotlight } from "@/components/ui/card-spotlight";

const Stack = {
  "Next.js": "https://nextjs.org",
  "Node.js": "https://nodejs.org",
  "TypeScript": "https://www.typescriptlang.org",
  "TailwindCSS": "https://tailwindcss.com",
  "PostgreSQL": "https://www.postgresql.org",
  "MongoDB": "https://www.mongodb.com",
  "GitHub": "https://github.com",
  "Docker": "https://www.docker.com",
  "React.js": "https://reactjs.org",
  "Flask": "https://flask.palletsprojects.com",
  "Firebase": "https://firebase.google.com",
  "TF.js": "https://www.tensorflow.org/js",
  "Roboflow": "https://roboflow.com",
  "Mongoose": "https://mongoosejs.com",
  "Express.js": "https://expressjs.com",
  "Vercel": "https://vercel.com",
  "Supabase": "https://supabase.com",
  "Hugging Face": "https://huggingface.co/transformers",
  "PyTorch": "https://pytorch.org",
  "KindeAuth": "https://kinde.com",
  "Three.js": "https://threejs.org",
  "Azure VMs": "https://azure.microsoft.com/en-us/services/virtual-machines",
  "React Native": "https://reactnative.dev/",
  "Shad-cn": "https://ui.shadcn.com/",
  "Colab": "https://colab.research.google.com",
  "Jupyter": "https://jupyter.org",
  "Keras": "https://keras.io",
  "Numpy": "https://numpy.org",
  "Pandas": "https://pandas.pydata.org",
  "Matplotlib": "https://matplotlib.org",
  "Seaborn": "https://seaborn.pydata.org",
  "Scikit-learn": "https://scikit-learn.org",
  // "OpenCV": "https://opencv.org",
  // "GCP": "https://cloud.google.com",
  // "AWS": "https://aws.amazon.com",
  // "Heroku": "https://www.heroku.com",
  // "Netlify": "https://www.netlify.com",
  "Vite": "https://vitejs.dev",
  // "Webpack": "https://webpack.js.org",
  // "Babel": "https://babeljs.io",
  // "ESLint": "https://eslint.org",
  // "Prettier": "https://prettier.io",
  // "Jest": "https://jestjs.io",
  // "Framer Motion": "https://www.framer.com/motion",

}

export function TechStack() {
  return (

    <div id="TechStack" className="flex py-20  items-center justify-center bg-black antialiased ">
      <div className="grid grid-cols-3  md:grid-cols-5  lg:grid-cols-7 p-0 m-0 -p-24">
        {Object.keys(Stack).map((key,index) => (
          <CardSpotlight key={key} className="flex flex-col items-center justify-center p-4 m-1 w-32 h-24">
            
            {/* <a href={Stack[key]} target="_blank" rel="noopener noreferrer">
              {key}
            </a> */}
            <p className="text-white z-9999 font-bold text-xl mt-4">{key}</p>
          </CardSpotlight>
        ))}
      </div>
    </div>
  );
}
