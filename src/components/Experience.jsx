import React from 'react'

function Experience({isDarkMode}) {
  return (
    <div className="flex flex-col font-mono">
        <p className={isDarkMode ? "text-xl font-bold underline mb-2 text-white" : "text-xl font-bold underline mb-2"}>future</p>
        <div className="space-y-2 text-sm sm:text-base">
                <p>
                  <span className="text-red-400">- swe intern: </span>
                  <a 
                    href="https://www.palantir.com/platforms/gotham/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-400 hover:underline"
                  >
                    gotham/defense tech @ palantir (su25)
                  </a>
                </p>
        </div>
        <div className= "space-y-2 text-sm sm:text-base">
                <p>
                  <span className="text-red-400">- mscs student </span>
                  <span className="text-orange-400">@ university of maryland: college park</span>
                </p>
        </div>

        <p className={isDarkMode ? "text-xl font-bold underline mb-2 mt-4 text-white" : "text-xl font-bold underline mb-2 mt-4"}>present</p>
        <div className="text-sm sm:text-base">
                <p>
                  <span className="text-red-400">- lead ta: </span>
                  <span className="text-orange-400"> cmsc132 (sp25) </span>
                </p>
                <p>
                  <span className="text-red-400">- undergraduate ta: </span>
                  <span className="text-orange-400"> cmsc434 (sp25)</span>
                </p>
                <p>
                  <span className="text-red-400">- computer science ambassador</span>
                  <span className="text-orange-400"> (cmns)</span>
                </p>
                <p>
                  <span className="text-red-400">- cs + math student</span>
                  <span className="text-orange-400"> @ university of maryland: college park</span>
                </p>
        </div>

        <p className={isDarkMode ? "text-xl font-bold underline mb-2 mt-4 text-white" : "text-xl font-bold underline mb-2 mt-4"}>past</p>
        <div className="text-gray-300 text-sm sm:text-base">
                <p>
                  <span className="text-red-400">- lead ta: </span>
                  <a 
                    href="https://www.cs.umd.edu/class/spring2024/cmsc131/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-400 hover:underline"
                  >
                    cmsc131
                  </a>
                  <span className="text-orange-400"> (su24, sp24, sp23), </span>
                  <a 
                    href="https://www.cs.umd.edu/class/fall2022/cmsc132-030X/#:~:text=Object%2DOriented%20Programming%20II%20is,focus%20on%20object%2Doriented%20programming."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-400 hover:underline"
                  >
                    cmsc132
                  </a>
                  <span className="text-orange-400"> (su23, fa22, su22,), </span>
                  <a 
                    href="https://www.cs.umd.edu/class/fall2023/cmsc122-0101/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-400 hover:underline"
                  >
                    cmsc122
                  </a>
                  <span className="text-orange-400"> (fa23)</span>
                </p>
                <p>
                  <span className="text-red-400">- swe intern: </span>
                  <a 
                    href="https://aws.amazon.com/batch/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-400 hover:underline"
                  >
                    batch scaling @ aws (su24)
                  </a>
                </p>
                <p>
                  <span className="text-red-400">- swe intern: </span>
                  <a 
                    href="https://advertising.amazon.com/products/display-ads"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-400 hover:underline"
                  >
                    display ads @ amazon (su23)
                  </a>
                </p>
                <p>
                  <span className="text-red-400">- swe intern: </span>
                  <a 
                    href="https://www.northropgrumman.com/who-we-are/business-sectors/mission-systems"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-400 hover:underline"
                  >
                    mission systems @ northrop grumman (su22)
                  </a>
                </p>
        </div>
    </div>
  )
}

export default Experience