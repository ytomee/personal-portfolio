import React from 'react'

const Learning = () => {
  return (
    
    <div className="skills_content">
        <h3 className="skills_title">Learning</h3>

        <div className="skills_box">
            <div className="skills_group">

                <div className="skills_data">
                <i className='bx bxl-react'></i>

                    <div>
                        <h3 className="skills_name">React</h3>
                        <span className="skills_level">Frontend</span>
                    </div>
                </div>

            </div>

            <div className="skills_group">

                <div className="skills_data">
                <i className='bx bxl-tailwind-css'></i>

                    <div>
                        <h3 className="skills_name">Tailwind</h3>
                        <span className="skills_level">Frontend</span>
                    </div>
                </div>

            </div>
        </div>
    </div>

  )
}

export default Learning