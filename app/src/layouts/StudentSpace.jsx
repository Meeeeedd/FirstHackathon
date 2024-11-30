import { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import './StudentSpace.css';

const StudentSpace = () => {
  const [studentData, setStudentData] = useState({
    name: 'Mohamed Ben Nayma',
    schoolRank: 3,
    globalSchoolRank: 12,
    totalBottles: 128,
    totalWeight: 15.6,
    profilePic: 'https://placekitten.com/200/200',
    badges: ['100 Bottles', '5kg Recycled'],
    lastUpdated: new Date().toLocaleTimeString(),
  });

  const [isUpdated, setIsUpdated] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  const rankAnimation = useSpring({
    from: { opacity: 0, transform: 'scale(0.5)' },
    to: { opacity: 1, transform: 'scale(1)' },
    reset: isUpdated,
  });

  const statsAnimation = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    reset: isUpdated,
  });

  const tips = [
    'Recycling one aluminum can saves enough energy to power a TV for 3 hours!',
    'Every ton of recycled paper saves 17 trees.',
    'Plastic can take up to 500 years to decompose in a landfill.',
  ];

  const getRandomTip = () => tips[Math.floor(Math.random() * tips.length)];

  const updateData = () => {
    setStudentData({
      ...studentData,
      totalBottles: studentData.totalBottles + 10,
      totalWeight: studentData.totalWeight + 1.5,
      lastUpdated: new Date().toLocaleTimeString(),
    });
    setIsUpdated(!isUpdated);
    setFeedbackMessage('🎉 Recycling Stats Updated Successfully!');
    setTimeout(() => setFeedbackMessage(''), 3000);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setStudentData(prevData => ({
        ...prevData,
        totalBottles: prevData.totalBottles + Math.floor(Math.random() * 5),
      }));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (studentData.totalBottles % 100 === 0) {
      setFeedbackMessage("🎉 Congratulations! You've reached a new milestone!");
      setTimeout(() => setFeedbackMessage(''), 5000);
    }
  }, [studentData.totalBottles]);

  return (
    <div className={`student-space-container ${darkMode ? 'dark' : ''}`}>
      <header className="header">
        <h1>Student Space</h1>
      </header>

      <section className="student-info">
        <img src={studentData.profilePic} alt="Profile" className="profile-pic" />
        <h2>Welcome, {studentData.name}!</h2>
      </section>

      <section className="badges-section">
        <h3>Your Achievements</h3>
        <div className="badges">
          {studentData.badges.map((badge, index) => (
            <animated.span
              key={index}
              className="badge"
              style={useSpring({ opacity: 1, from: { opacity: 0 }, delay: index * 200 })}
            >
              {badge}
            </animated.span>
          ))}
        </div>
      </section>

      <section className="ranking-section">
        <animated.div className="rank-card" style={rankAnimation}>
          <h3>Your School Rank</h3>
          <p className="rank-number">
            {studentData.schoolRank}
            <sup>rd</sup>
          </p>
        </animated.div>
        <animated.div className="rank-card" style={rankAnimation}>
          <h3>Global School Rank</h3>
          <p className="rank-number">
            {studentData.globalSchoolRank}
            <sup>th</sup>
          </p>
        </animated.div>
      </section>

      <section className="stats-section">
        <animated.div className="stat-card" style={statsAnimation}>
          <h3>Total Bottles Deposited</h3>
          <p className="stat-number">{studentData.totalBottles}</p>
        </animated.div>
        <animated.div className="stat-card" style={statsAnimation}>
          <h3>Total Weight Recycled</h3>
          <p className="stat-number">{studentData.totalWeight} kg</p>
        </animated.div>
      </section>

      <section className="progress-section">
        <h3>Progress to Next Badge</h3>
        <div className="progress-bar">
          <div
            className="progress"
            style={{ width: `${(studentData.totalBottles % 100) + 20}%` }}
          ></div>
        </div>
      </section>

      <section className="recycling-tips">
        <h3>Recycling Tip</h3>
        <p>{getRandomTip()}</p>
      </section>

      <section className="leaderboard-section">
        <h3>Top Recyclers in Your School</h3>
        <ul>
          <li>Student A - 150 bottles</li>
          <li>Student B - 140 bottles</li>
          <li>
            {studentData.name} - {studentData.totalBottles} bottles
          </li>
        </ul>
      </section>

      <div className="button-container">
        <button className="update-btn" onClick={updateData}>
          Update Recycling Stats
        </button>
      </div>

      {feedbackMessage && <div className="feedback-message">{feedbackMessage}</div>}

      <footer className="footer">
        <p>Last updated at {studentData.lastUpdated}</p>
        <p>Keep up the great work, {studentData.name}! 💪</p>
      </footer>
    </div>
  );
};

export default StudentSpace;
