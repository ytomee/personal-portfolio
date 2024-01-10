import React from 'react'

const Want = () => {
  return (
   
    <div className="skills_content">
        <h3 className="skills_title">Want to Learn</h3>

        <div className="skills_box">
            <div className="skills_group">

                <div className="skills_data">
                <i className='bx bxl-jquery'></i>

                    <div>
                        <h3 className="skills_name">JQuery</h3>
                        <span className="skills_level">Frontend</span>
                    </div>
                </div>

            </div>

            <div className="skills_group">

                <div className="skills_data">
                <i className='bx bxl-postgresql'></i>

                    <div>
                        <h3 className="skills_name">SQL</h3>
                        <span className="skills_level">Backend</span>
                    </div>
                </div>

            </div>
        </div>
    </div>

  )
}

export default Want