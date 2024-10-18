export const metadata={
    title:"About Rohit Dhiman"
}

export default function About(){
    const styles = {
        container: {
          padding: '16px',
          fontFamily: 'Arial, sans-serif',
        },
        heading: {
          fontSize: '2rem',
          fontWeight: 'bold',
        },
        paragraph: {
          marginTop: '8px',
          fontSize: '1rem',
          lineHeight: '1.5',
        },
      };
    return(
        <div style={styles.container}>
      <h1 style={styles.heading}>About Me</h1>
      <p style={styles.paragraph}>
        Hello! My name is <strong>Rohit Kumar</strong>. I am currently a student at 
        <strong> IIT BHU Varanasi</strong>, pursuing a degree in Chemical Engineering.
      </p>
      <p style={styles.paragraph}>
        My passion for chemical engineering stems from a desire to innovate and contribute 
        to sustainable solutions in the field of chemistry and materials. I enjoy 
        learning about various chemical processes and their applications in real-world scenarios.
      </p>
      <p style={styles.paragraph}>
        In my free time, I love exploring new technologies, participating in workshops, 
        and collaborating on projects that promote environmental sustainability.
      </p>
      <p style={styles.paragraph}>
        Feel free to reach out to me for collaborations or discussions related to 
        chemical engineering or any other topics of interest!
      </p>
      </div>
    )
}
