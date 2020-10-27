import React from 'react'
import Story from './Story'
import './StoryReel.css'




function StoryReel() {
    return (
        <div className="storyReel">
             <Story
                image='https://images.pexels.com/photos/110812/pexels-photo-110812.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                profileSrc='https://assets.yellowtrace.com.au/wp-content/uploads/2019/07/25141848/Abstract-Portrait-Paintings-by-Joseph-Lee-Yellowtrace-05.jpg'
                title='faizan '
            />
            <Story
                image='https://images.pexels.com/photos/3690511/pexels-photo-3690511.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                profileSrc='https://media-exp1.licdn.com/dms/image/C4E03AQGivOvOWtHbhQ/profile-displayphoto-shrink_200_200/0?e=1602115200&v=beta&t=KLHRHD6oZcHMHCmlVEqS7wGEEnjiYn9HdUzt41SNrcY'
                title='akib '
            />
            <Story
                image='https://images.pexels.com/photos/289323/pexels-photo-289323.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                profileSrc='https://media-exp1.licdn.com/dms/image/C4E03AQGivOvOWtHbhQ/profile-displayphoto-shrink_200_200/0?e=1602115200&v=beta&t=KLHRHD6oZcHMHCmlVEqS7wGEEnjiYn9HdUzt41SNrcY'
                title='sayma'
            />
            <Story
                image='https://images.pexels.com/photos/3667981/pexels-photo-3667981.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                profileSrc='https://media-exp1.licdn.com/dms/image/C4E03AQGivOvOWtHbhQ/profile-displayphoto-shrink_200_200/0?e=1602115200&v=beta&t=KLHRHD6oZcHMHCmlVEqS7wGEEnjiYn9HdUzt41SNrcY'
                title='mubasshir'
            />
        </div>
    )
}

export default StoryReel
