// Course information
const CourseInfo = {
    id: 718,
    name: "Test Course",
    startDate: "08-01-2024",
  };
  
  // Assignment group information
  const AssignmentGroup = {
    id: 988,
    name: "Test Group",
    course_id: 718,
    group_weight: 35,
    assignments: [
      {
        id: 1,
        name: "Test Assignment",
        due_at: "08-01-2024",
        points_possible: 100,
      },
      {
        id: 2,
        name: "Test Assignment 2",
        due_at: "09-16-2024",
        points_possible: 100,
      },
      {
        id: 3,
        name: "Test Assignment 3",
        due_at: "10-29-2024",
        points_possible: 200,
      },
    ],
  };
  
  // Learner submission information
  const LearnerSubmission = [
    {
      learner_id: 32,
      assignment_id: 1,
      submission: {
        submitted_at: "08-01-2024",
        score: 80,
      },
    },
    {
      learner_id: 32,
      assignment_id: 2,
      submission: {
        submitted_at: "08-01-2024",
        score: 50,
      },
    },
    {
      learner_id: 32,
      assignment_id: 3,
      submission: {
        submitted_at: "08-01-2024",
        score: 170,
      },
    },
  ];
  
  // Variables
  // let learner_id = LearnerSubmission[0].learner_id;
  let assignmentGroup_total = AssignmentGroup.assignments.reduce(
    (total, assignment) => total + assignment.points_possible,
    0
  );
  console.log(assignmentGroup_total);
  let learner_total = LearnerSubmission.reduce(
    (total, b) => total + b.submission.score,
    0
  );
  let learner_avg = (learner_total / assignmentGroup_total) * 100;
  console.log(learner_avg);
  

  // console.log(learner_total)
  
  function getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmission) {
    try {
      if (AssignmentGroup.course_id != CourseInfo.id) {
        throw new Error("This assignment group does not belong to a course.");
      } 
    } catch (error) {console.log("This assignment group does not belong to a course");
        return[];
      }

      const currentDate = new Date();
  
      let learnerInfo = {};
        //Iterate over Submissions
      LearnerSubmissions.array.forEach((submission) => {
        //Extract ID's
        const learnerID = submission.learner_id;
        const assignmentID = submission.assignment_id;
        //Find Assignment
        const assignment = AssignmentGroup.assignments.find(a => a.id === assignmentId);
        if (!assignment) return;
        // Convert Due Date to Date Object & check past due
        const assignDueDate = new Date(assignment.due_at);
        if (assignDueDate > currentDate) {
          return;
        } 
        if (addignment.points_possible <= 0) {
            throw new Error(`Invalid possible points for ID ${assignmentID}`);
        } 

        //Late submission penalty
        let score = submission.score;
        const submittedDate = new Date(submission.submitted_at);
        if (submittedDate > assignDueDate) {
            score -= assignment.points_possible * 0.1;
        }

        // Calculate score percentage
        const scorePercentage = Math.max(0, (score / assignment.points_possible) * 100);
      });
      
  }