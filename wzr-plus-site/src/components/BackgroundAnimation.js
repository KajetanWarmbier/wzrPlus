const BackgroundAnimation = () => {
  return (
    <div>
      <div className="relative">
        <div className="absolute w-[100%]">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#29aae3"
              fillOpacity="0.35"
              d="M0,128L60,112C120,96,240,64,360,69.3C480,75,600,117,720,149.3C840,181,960,203,1080,192C1200,181,1320,139,1380,117.3L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            ></path>
          </svg>
        </div>
        <div className="absolute w-[100%]">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#262161"
              fillOpacity="0.35"
              transform="scale(3, 3)"
              d="M0,128L60,112C120,96,240,64,360,69.3C480,75,600,117,720,149.3C840,181,960,203,1080,192C1200,181,1320,139,1380,117.3L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default BackgroundAnimation;
