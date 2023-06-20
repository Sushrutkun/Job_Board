// const url = 'https://jobsearch4.p.rapidapi.com/api/v1/Jobs/Search?SearchQuery=java';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '906daa7dfbmsh866b26b3abd48e4p1e469fjsna1cc01584116',
// 		'X-RapidAPI-Host': 'jobsearch4.p.rapidapi.com'
// 	}
// };

// import JobCard from "./components/Job/JobCard";

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }
// async function fetchData() {
//   const url = 'https://jobsearch4.p.rapidapi.com/api/v1/Jobs/Search?SearchQuery=java&PageSize=10&PageNumber=1';
//   const options = {
//       method: 'GET',
//       headers: {
//           'X-RapidAPI-Key': '906daa7dfbmsh866b26b3abd48e4p1e469fjsna1cc01584116',
//           'X-RapidAPI-Host': 'jobsearch4.p.rapidapi.com'
//       }
//   };

//   try {
//       const response = await fetch(url, options);
//       const result = await response.json();
//       console.log(result);
//   } catch (error) {
//       console.error(error);
//   }
//   try {
//     const response = await fetch(url, options);
//     const result = await response.json();
//     // console.log(result);
//     console.log(result.data);
  
//     // Pass all elements of the array as props to a function or component
//     JobCard(...result.data); // Replace myFunction with the desired function or component
  
//   } catch (error) {
//     console.error(error);
//   }
  
// }

// fetchData();

export default 
[
  {
    id: 1,
    postedOn: new Date(),
    title: "Frontend Developer",
    type: "Full time",
    location: "Remote",
    companyName: "Google",
    companyUrl: "Google.com",
    skills: ["Javascript", "React.js", "Node.js"],
    link: "https://google.com/careers",
  },
  
];













//   {
//   id: 5,
//   postedOn: "2023-05-18T11:30:00Z",
//   title: "DevOps Engineer",
//   type: "Full time",
//   location: "Office",
//   companyName: "Amazon",
//   companyUrl: "https://amazon.com",
//   skills: ["AWS", "Docker", "Kubernetes"],
//   link: "https://amazon.com/careers"
//   }
//   ,
// {
// id: 6,
// postedOn: "2023-05-17T13:20:00Z",
// title: "Product Manager",
// type: "Full time",
// location: "Office",
// companyName: "Apple",
// companyUrl: "https://apple.com",
// skills: ["Product Management", "Agile", "User Experience"],
// link: "https://apple.com/careers"
// }

// ,
// {
// id: 7,
// postedOn: "2023-05-16T15:45:00Z",
// title: "Software Engineer",
// type: "Full time",
// location: "Office",
// companyName: "Microsoft",
// companyUrl: "https://microsoft.com",
// skills: ["Java", "C++", "Software Development"],
// link: "https://microsoft.com/careers"
// }

// ,
// {
// id: 8,
// postedOn: "2023-05-15T09:10:00Z",
// title: "Data Scientist",
// type: "Contract",
// location: "Remote",
// companyName: "IBM",
// companyUrl: "https://ibm.com",
// skills: ["Python", "Machine Learning", "Statistical Analysis"],
// link: "https://ibm.com/careers"
// }

// ,
// {
// id: 9,
// postedOn: "2023-05-14T16:30:00Z",
// title: "Frontend Developer",
// type: "Full time",
// location: "Remote",
// companyName: "Netflix",
// companyUrl: "https://netflix.com",
// skills: ["HTML", "CSS", "JavaScript"],
// link: "https://netflix.com/careers"
// }

// ,
// {
// id: 10,
// postedOn: "2023-05-13T11:25:00Z",
// title: "Marketing Manager",
// type: "Full time",
// location: "Office",
// companyName: "Salesforce",
// companyUrl: "https://salesforce.com",
// skills: ["Marketing Strategy", "Digital Marketing", "SEO"],
// link: "https://salesforce.com/careers"
// }

// ,
// {
// id: 11,
// postedOn: "2023-05-12T14:50:00Z",
// title: "Cybersecurity Analyst",
// type: "Part time",
// location: "Office",
// companyName: "Cisco",
// companyUrl: "https://cisco.com",
// skills: ["Network Security", "Penetration Testing", "Incident Response"],
// link: "https://cisco.com/careers"
// }

// ,
// {
// id: 12,
// postedOn: "2023-05-11T10:05:00Z",
// title: "Data Engineer",
// type: "Contract",
// location: "Remote",
// companyName: "Oracle",
// companyUrl: "https://oracle.com",
// skills: ["SQL", "ETL", "Big Data"],
// link: "https://oracle.com/careers"
// }

// ,
// {
// id: 13,
// postedOn: "2023-05-10T15:15:00Z",
// title: "Graphic Designer",
// type: "Part time",
// location: "Office",
// companyName: "Adobe",
// companyUrl: "https://adobe.com",
// skills: ["Adobe Photoshop", "Illustrator", "Typography"],
// link: "https://adobe.com/careers"
// }

// ,
// {
// id: 14,
// postedOn: "2023-05-09T12:40:00Z",
// title: "Full Stack Developer",
// type: "Full time",
// location: "Remote",
// companyName: "GitHub",
// companyUrl: "https://github.com",
// skills: ["JavaScript", "Python", "React.js", "Django"],
// link: "https://github.com/careers"
// }
// ]
// // ,
// // {
// // id: 15,
// // postedOn: "2023-05-08T16:55:00Z",
// // title: "AI Researcher",
// // type: "Full time",
// // location: "Office",
// // companyName: "OpenAI",
// // companyUrl: "https://openai.com",
// // skills: ["Machine Learning", "Deep Learning", "Natural Language Processing"],
// // link: "https://openai.com/careers"
// // },{'id': 16, 'postedOn': '2023-05-22T17:04:38.224127Z', 'title': 'Job Title 16', 'type': 'Part time', 'location': 'Remote', 'companyName': 'Company 16', 'companyUrl': 'https://company16.com', 'skills': ['React.js', 'Python', 'CSS'], 'link': 'https://company16.com/careers'}
// // ,
// // {'id': 17, 'postedOn': '2023-05-22T17:04:38.224133Z', 'title': 'Job Title 17', 'type': 'Part time', 'location': 'Office', 'companyName': 'Company 17', 'companyUrl': 'https://company17.com', 'skills': ['JavaScript', 'Java', 'Node.js', 'Python'], 'link': 'https://company17.com/careers'}
// // ,
// // {'id': 18, 'postedOn': '2023-05-22T17:04:38.224138Z', 'title': 'Job Title 18', 'type': 'Part time', 'location': 'Remote', 'companyName': 'Company 18', 'companyUrl': 'https://company18.com', 'skills': ['Java'], 'link': 'https://company18.com/careers'}
// // ,
// // {'id': 19, 'postedOn': '2023-05-22T17:04:38.224147Z', 'title': 'Job Title 19', 'type': 'Contract', 'location': 'Remote', 'companyName': 'Company 19', 'companyUrl': 'https://company19.com', 'skills': ['Java', 'React.js'], 'link': 'https://company19.com/careers'}
// // ,
// // {'id': 20, 'postedOn': '2023-05-22T17:04:38.224154Z', 'title': 'Job Title 20', 'type': 'Full time', 'location': 'Office', 'companyName': 'Company 20', 'companyUrl': 'https://company20.com', 'skills': ['React.js', 'Node.js', 'Java', 'JavaScript'], 'link': 'https://company20.com/careers'}
// // ,
// // {'id': 21, 'postedOn': '2023-05-22T17:04:38.224161Z', 'title': 'Job Title 21', 'type': 'Contract', 'location': 'Remote', 'companyName': 'Company 21', 'companyUrl': 'https://company21.com', 'skills': ['JavaScript', 'CSS', 'HTML', 'Node.js'], 'link': 'https://company21.com/careers'}
// // ,
// // {'id': 22, 'postedOn': '2023-05-22T17:04:38.224167Z', 'title': 'Job Title 22', 'type': 'Full time', 'location': 'Remote', 'companyName': 'Company 22', 'companyUrl': 'https://company22.com', 'skills': ['HTML', 'JavaScript'], 'link': 'https://company22.com/careers'}
// // ,
// // {'id': 23, 'postedOn': '2023-05-22T17:04:38.224173Z', 'title': 'Job Title 23', 'type': 'Part time', 'location': 'Office', 'companyName': 'Company 23', 'companyUrl': 'https://company23.com', 'skills': ['Python', 'Node.js', 'Java'], 'link': 'https://company23.com/careers'}
// // ,
// // {'id': 24, 'postedOn': '2023-05-22T17:04:38.224179Z', 'title': 'Job Title 24', 'type': 'Contract', 'location': 'Office', 'companyName': 'Company 24', 'companyUrl': 'https://company24.com', 'skills': ['Node.js', 'Java', 'React.js', 'HTML'], 'link': 'https://company24.com/careers'}
// ,
// {'id': 25, 'postedOn': '2023-05-22T17:04:38.224185Z', 'title': 'Job Title 25', 'type': 'Contract', 'location': 'Office', 'companyName': 'Company 25', 'companyUrl': 'https://company25.com', 'skills': ['JavaScript'], 'link': 'https://company25.com/careers'}
// ,
// {'id': 26, 'postedOn': '2023-05-22T17:04:38.224190Z', 'title': 'Job Title 26', 'type': 'Full time', 'location': 'Office', 'companyName': 'Company 26', 'companyUrl': 'https://company26.com', 'skills': ['JavaScript'], 'link': 'https://company26.com/careers'}
// ,
// {'id': 27, 'postedOn': '2023-05-22T17:04:38.224195Z', 'title': 'Job Title 27', 'type': 'Contract', 'location': 'Remote', 'companyName': 'Company 27', 'companyUrl': 'https://company27.com', 'skills': ['Python'], 'link': 'https://company27.com/careers'}
// ,
// {'id': 28, 'postedOn': '2023-05-22T17:04:38.224201Z', 'title': 'Job Title 28', 'type': 'Full time', 'location': 'Office', 'companyName': 'Company 28', 'companyUrl': 'https://company28.com', 'skills': ['React.js', 'CSS'], 'link': 'https://company28.com/careers'}
// ,
// {'id': 29, 'postedOn': '2023-05-22T17:04:38.224220Z', 'title': 'Job Title 29', 'type': 'Contract', 'location': 'Remote', 'companyName': 'Company 29', 'companyUrl': 'https://company29.com', 'skills': ['JavaScript'], 'link': 'https://company29.com/careers'}
// ,
// {'id': 30, 'postedOn': '2023-05-22T17:04:38.224226Z', 'title': 'Job Title 30', 'type': 'Part time', 'location': 'Office', 'companyName': 'Company 30', 'companyUrl': 'https://company30.com', 'skills': ['Node.js', 'JavaScript', 'Python'], 'link': 'https://company30.com/careers'}
// ,
// {'id': 31, 'postedOn': '2023-05-22T17:04:38.224231Z', 'title': 'Job Title 31', 'type': 'Contract', 'location': 'Remote', 'companyName': 'Company 31', 'companyUrl': 'https://company31.com', 'skills': ['Node.js', 'CSS'], 'link': 'https://company31.com/careers'}
// ,
// {'id': 32, 'postedOn': '2023-05-22T17:04:38.224236Z', 'title': 'Job Title 32', 'type': 'Part time', 'location': 'Remote', 'companyName': 'Company 32', 'companyUrl': 'https://company32.com', 'skills': ['Python'], 'link': 'https://company32.com/careers'}
// ,
// {'id': 33, 'postedOn': '2023-05-22T17:04:38.224240Z', 'title': 'Job Title 33', 'type': 'Full time', 'location': 'Remote', 'companyName': 'Company 33', 'companyUrl': 'https://company33.com', 'skills': ['JavaScript', 'Python'], 'link': 'https://company33.com/careers'}
// ,
// {'id': 34, 'postedOn': '2023-05-22T17:04:38.224246Z', 'title': 'Job Title 34', 'type': 'Full time', 'location': 'Remote', 'companyName': 'Company 34', 'companyUrl': 'https://company34.com', 'skills': ['JavaScript', 'React.js'], 'link': 'https://company34.com/careers'}
// ,
// {'id': 35, 'postedOn': '2023-05-22T17:04:38.224254Z', 'title': 'Job Title 35', 'type': 'Contract', 'location': 'Remote', 'companyName': 'Company 35', 'companyUrl': 'https://company35.com', 'skills': ['Node.js'], 'link': 'https://company35.com/careers'}
// ,
// {'id': 36, 'postedOn': '2023-05-22T17:04:38.224259Z', 'title': 'Job Title 36', 'type': 'Full time', 'location': 'Remote', 'companyName': 'Company 36', 'companyUrl': 'https://company36.com', 'skills': ['CSS'], 'link': 'https://company36.com/careers'}
// ,
// {'id': 37, 'postedOn': '2023-05-22T17:04:38.224264Z', 'title': 'Job Title 37', 'type': 'Contract', 'location': 'Remote', 'companyName': 'Company 37', 'companyUrl': 'https://company37.com', 'skills': ['Java', 'Python', 'JavaScript'], 'link': 'https://company37.com/careers'}
// ,
// {'id': 38, 'postedOn': '2023-05-22T17:04:38.224269Z', 'title': 'Job Title 38', 'type': 'Contract', 'location': 'Office', 'companyName': 'Company 38', 'companyUrl': 'https://company38.com', 'skills': ['Java', 'Python', 'HTML', 'React.js'], 'link': 'https://company38.com/careers'}
// ,
// {'id': 39, 'postedOn': '2023-05-22T17:04:38.224277Z', 'title': 'Job Title 39', 'type': 'Part time', 'location': 'Remote', 'companyName': 'Company 39', 'companyUrl': 'https://company39.com', 'skills': ['CSS', 'JavaScript', 'React.js'], 'link': 'https://company39.com/careers'}
// ,
// {'id': 40, 'postedOn': '2023-05-22T17:04:38.224282Z', 'title': 'Job Title 40', 'type': 'Contract', 'location': 'Office', 'companyName': 'Company 40', 'companyUrl': 'https://company40.com', 'skills': ['HTML'], 'link': 'https://company40.com/careers'}
// ,
// {'id': 41, 'postedOn': '2023-05-22T17:04:38.224288Z', 'title': 'Job Title 41', 'type': 'Full time', 'location': 'Remote', 'companyName': 'Company 41', 'companyUrl': 'https://company41.com', 'skills': ['Node.js', 'HTML', 'React.js', 'Java'], 'link': 'https://company41.com/careers'}
// ,
// {'id': 42, 'postedOn': '2023-05-22T17:04:38.224294Z', 'title': 'Job Title 42', 'type': 'Contract', 'location': 'Remote', 'companyName': 'Company 42', 'companyUrl': 'https://company42.com', 'skills': ['Node.js', 'Java', 'React.js', 'Python'], 'link': 'https://company42.com/careers'}
// ,
// {'id': 43, 'postedOn': '2023-05-22T17:04:38.224299Z', 'title': 'Job Title 43', 'type': 'Full time', 'location': 'Remote', 'companyName': 'Company 43', 'companyUrl': 'https://company43.com', 'skills': ['JavaScript', 'React.js', 'HTML', 'Java'], 'link': 'https://company43.com/careers'}
// ,
// {'id': 44, 'postedOn': '2023-05-22T17:04:38.224305Z', 'title': 'Job Title 44', 'type': 'Part time', 'location': 'Remote', 'companyName': 'Company 44', 'companyUrl': 'https://company44.com', 'skills': ['Node.js', 'Python', 'Java'], 'link': 'https://company44.com/careers'}
// ,
// {'id': 45, 'postedOn': '2023-05-22T17:04:38.224310Z', 'title': 'Job Title 45', 'type': 'Part time', 'location': 'Remote', 'companyName': 'Company 45', 'companyUrl': 'https://company45.com', 'skills': ['Python', 'JavaScript', 'CSS'], 'link': 'https://company45.com/careers'}
// ,
// {'id': 46, 'postedOn': '2023-05-22T17:04:38.224322Z', 'title': 'Job Title 46', 'type': 'Contract', 'location': 'Office', 'companyName': 'Company 46', 'companyUrl': 'https://company46.com', 'skills': ['Python', 'Node.js', 'Java', 'JavaScript'], 'link': 'https://company46.com/careers'}
// ,
// {'id': 47, 'postedOn': '2023-05-22T17:04:38.224327Z', 'title': 'Job Title 47', 'type': 'Full time', 'location': 'Remote', 'companyName': 'Company 47', 'companyUrl': 'https://company47.com', 'skills': ['Node.js', 'Python'], 'link': 'https://company47.com/careers'}
// ,
// {'id': 48, 'postedOn': '2023-05-22T17:04:38.224332Z', 'title': 'Job Title 48', 'type': 'Part time', 'location': 'Office', 'companyName': 'Company 48', 'companyUrl': 'https://company48.com', 'skills': ['React.js', 'HTML', 'Java'], 'link': 'https://company48.com/careers'}
// ,
// {'id': 49, 'postedOn': '2023-05-22T17:04:38.224337Z', 'title': 'Job Title 49', 'type': 'Contract', 'location': 'Remote', 'companyName': 'Company 49', 'companyUrl': 'https://company49.com', 'skills': ['HTML', 'React.js', 'JavaScript'], 'link': 'https://company49.com/careers'}
// ,
// {'id': 50, 'postedOn': '2023-05-22T17:04:38.224342Z', 'title': 'Job Title 50', 'type': 'Contract', 'location': 'Office', 'companyName': 'Company 50', 'companyUrl': 'https://company50.com', 'skills': ['Node.js', 'CSS', 'JavaScript'], 'link': 'https://company50.com/careers'}
// ,
// {'id': 51, 'postedOn': '2023-05-22T17:04:38.224350Z', 'title': 'Job Title 51', 'type': 'Part time', 'location': 'Remote', 'companyName': 'Company 51', 'companyUrl': 'https://company51.com', 'skills': ['Node.js'], 'link': 'https://company51.com/careers'}
// ,
// {'id': 52, 'postedOn': '2023-05-22T17:04:38.224356Z', 'title': 'Job Title 52', 'type': 'Full time', 'location': 'Office', 'companyName': 'Company 52', 'companyUrl': 'https://company52.com', 'skills': ['CSS', 'Python', 'HTML'], 'link': 'https://company52.com/careers'}
// ,
// {'id': 53, 'postedOn': '2023-05-22T17:04:38.224360Z', 'title': 'Job Title 53', 'type': 'Contract', 'location': 'Remote', 'companyName': 'Company 53', 'companyUrl': 'https://company53.com', 'skills': ['JavaScript'], 'link': 'https://company53.com/careers'}
// ,
// {'id': 54, 'postedOn': '2023-05-22T17:04:38.224366Z', 'title': 'Job Title 54', 'type': 'Part time', 'location': 'Office', 'companyName': 'Company 54', 'companyUrl': 'https://company54.com', 'skills': ['Node.js', 'HTML', 'Java'], 'link': 'https://company54.com/careers'}
// ,
// {'id': 55, 'postedOn': '2023-05-22T17:04:38.224371Z', 'title': 'Job Title 55', 'type': 'Contract', 'location': 'Remote', 'companyName': 'Company 55', 'companyUrl': 'https://company55.com', 'skills': ['React.js', 'Java'], 'link': 'https://company55.com/careers'}
// ,
// {'id': 56, 'postedOn': '2023-05-22T17:04:38.224377Z', 'title': 'Job Title 56', 'type': 'Part time', 'location': 'Remote', 'companyName': 'Company 56', 'companyUrl': 'https://company56.com', 'skills': ['Java', 'React.js', 'JavaScript', 'HTML'], 'link': 'https://company56.com/careers'}
// ,
// {'id': 57, 'postedOn': '2023-05-22T17:04:38.224382Z', 'title': 'Job Title 57', 'type': 'Contract', 'location': 'Office', 'companyName': 'Company 57', 'companyUrl': 'https://company57.com', 'skills': ['Node.js', 'Java', 'HTML', 'CSS'], 'link': 'https://company57.com/careers'}
// ,
// {'id': 58, 'postedOn': '2023-05-22T17:04:38.224390Z', 'title': 'Job Title 58', 'type': 'Contract', 'location': 'Office', 'companyName': 'Company 58', 'companyUrl': 'https://company58.com', 'skills': ['Python', 'Java'], 'link': 'https://company58.com/careers'}
// ,
// {'id': 59, 'postedOn': '2023-05-22T17:04:38.224395Z', 'title': 'Job Title 59', 'type': 'Part time', 'location': 'Remote', 'companyName': 'Company 59', 'companyUrl': 'https://company59.com', 'skills': ['Node.js'], 'link': 'https://company59.com/careers'}
// ,{'id': 60, 'postedOn': '2023-05-22T17:04:38.224400Z', 'title': 'Job Title 60', 'type': 'Full time', 'location': 'Remote', 'companyName': 'Company 60', 'companyUrl': 'https://company60.com', 'skills': ['HTML', 'CSS', 'JavaScript'], 'link': 'https://company60.com/careers'}
// ,
// {'id': 61, 'postedOn': '2023-05-22T17:04:38.224406Z', 'title': 'Job Title 61', 'type': 'Part time', 'location': 'Remote', 'companyName': 'Company 61', 'companyUrl': 'https://company61.com', 'skills': ['Python', 'Node.js', 'JavaScript', 'Java'], 'link': 'https://company61.com/careers'}
// ,
// {'id': 62, 'postedOn': '2023-05-22T17:04:38.224411Z', 'title': 'Job Title 62', 'type': 'Contract', 'location': 'Office', 'companyName': 'Company 62', 'companyUrl': 'https://company62.com', 'skills': ['JavaScript', 'Node.js', 'Python'], 'link': 'https://company62.com/careers'}
// ,
// {'id': 63, 'postedOn': '2023-05-22T17:04:38.224419Z', 'title': 'Job Title 63', 'type': 'Full time', 'location': 'Office', 'companyName': 'Company 63', 'companyUrl': 'https://company63.com', 'skills': ['HTML', 'Node.js', 'CSS'], 'link': 'https://company63.com/careers'}
// ,
// {'id': 64, 'postedOn': '2023-05-22T17:04:38.224424Z', 'title': 'Job Title 64', 'type': 'Contract', 'location': 'Office', 'companyName': 'Company 64', 'companyUrl': 'https://company64.com', 'skills': ['Python', 'JavaScript', 'HTML'], 'link': 'https://company64.com/careers'}
// ,
// {'id': 65, 'postedOn': '2023-05-22T17:04:38.224430Z', 'title': 'Job Title 65', 'type': 'Full time', 'location': 'Remote', 'companyName': 'Company 65', 'companyUrl': 'https://company65.com', 'skills': ['Java', 'Python'], 'link': 'https://company65.com/careers'}
// ,
// {'id': 66, 'postedOn': '2023-05-22T17:04:38.224435Z', 'title': 'Job Title 66', 'type': 'Full time', 'location': 'Office', 'companyName': 'Company 66', 'companyUrl': 'https://company66.com', 'skills': ['Java'], 'link': 'https://company66.com/careers'}
// ,
// {'id': 67, 'postedOn': '2023-05-22T17:04:38.224443Z', 'title': 'Job Title 67', 'type': 'Full time', 'location': 'Remote', 'companyName': 'Company 67', 'companyUrl': 'https://company67.com', 'skills': ['HTML'], 'link': 'https://company67.com/careers'}
// ,
// {'id': 68, 'postedOn': '2023-05-22T17:04:38.224448Z', 'title': 'Job Title 68', 'type': 'Full time', 'location': 'Remote', 'companyName': 'Company 68', 'companyUrl': 'https://company68.com', 'skills': ['CSS'], 'link': 'https://company68.com/careers'}
// ,
// {'id': 69, 'postedOn': '2023-05-22T17:04:38.224453Z', 'title': 'Job Title 69', 'type': 'Contract', 'location': 'Office', 'companyName': 'Company 69', 'companyUrl': 'https://company69.com', 'skills': ['Java', 'CSS'], 'link': 'https://company69.com/careers'}
// ,
// {'id': 70, 'postedOn': '2023-05-22T17:04:38.224458Z', 'title': 'Job Title 70', 'type': 'Contract', 'location': 'Remote', 'companyName': 'Company 70', 'companyUrl': 'https://company70.com', 'skills': ['HTML', 'CSS'], 'link': 'https://company70.com/careers'}
// ,
// {'id': 71, 'postedOn': '2023-05-22T17:04:38.224463Z', 'title': 'Job Title 71', 'type': 'Contract', 'location': 'Remote', 'companyName': 'Company 71', 'companyUrl': 'https://company71.com', 'skills': ['Node.js'], 'link': 'https://company71.com/careers'}
// ,
// {'id': 72, 'postedOn': '2023-05-22T17:04:38.224468Z', 'title': 'Job Title 72', 'type': 'Full time', 'location': 'Remote', 'companyName': 'Company 72', 'companyUrl': 'https://company72.com', 'skills': ['CSS', 'Node.js', 'Java', 'JavaScript'], 'link': 'https://company72.com/careers'}
// ,
// {'id': 73, 'postedOn': '2023-05-22T17:04:38.224473Z', 'title': 'Job Title 73', 'type': 'Part time', 'location': 'Office', 'companyName': 'Company 73', 'companyUrl': 'https://company73.com', 'skills': ['Java', 'HTML'], 'link': 'https://company73.com/careers'}
// ,
// {'id': 74, 'postedOn': '2023-05-22T17:04:38.224478Z', 'title': 'Job Title 74', 'type': 'Part time', 'location': 'Remote', 'companyName': 'Company 74', 'companyUrl': 'https://company74.com', 'skills': ['Python', 'Java'], 'link': 'https://company74.com/careers'}
// ,
// {'id': 75, 'postedOn': '2023-05-22T17:04:38.224483Z', 'title': 'Job Title 75', 'type': 'Contract', 'location': 'Office', 'companyName': 'Company 75', 'companyUrl': 'https://company75.com', 'skills': ['HTML', 'Python'], 'link': 'https://company75.com/careers'}
// ,
// {'id': 76, 'postedOn': '2023-05-22T17:04:38.224488Z', 'title': 'Job Title 76', 'type': 'Part time', 'location': 'Remote', 'companyName': 'Company 76', 'companyUrl': 'https://company76.com', 'skills': ['Java', 'JavaScript'], 'link': 'https://company76.com/careers'}
// ,
// {'id': 77, 'postedOn': '2023-05-22T17:04:38.224494Z', 'title': 'Job Title 77', 'type': 'Part time', 'location': 'Remote', 'companyName': 'Company 77', 'companyUrl': 'https://company77.com', 'skills': ['CSS', 'React.js', 'JavaScript', 'HTML'], 'link': 'https://company77.com/careers'}
// ,
// {'id': 78, 'postedOn': '2023-05-22T17:04:38.224502Z', 'title': 'Job Title 78', 'type': 'Part time', 'location': 'Remote', 'companyName': 'Company 78', 'companyUrl': 'https://company78.com', 'skills': ['Java', 'HTML'], 'link': 'https://company78.com/careers'}
// ,
// {'id': 79, 'postedOn': '2023-05-22T17:04:38.224507Z', 'title': 'Job Title 79', 'type': 'Contract', 'location': 'Office', 'companyName': 'Company 79', 'companyUrl': 'https://company79.com', 'skills': ['Node.js', 'Python', 'Java'], 'link': 'https://company79.com/careers'}
// ,
// {'id': 80, 'postedOn': '2023-05-22T17:04:38.224515Z', 'title': 'Job Title 80', 'type': 'Part time', 'location': 'Remote', 'companyName': 'Company 80', 'companyUrl': 'https://company80.com', 'skills': ['Java'], 'link': 'https://company80.com/careers'}
// ,
// {'id': 81, 'postedOn': '2023-05-22T17:04:38.224521Z', 'title': 'Job Title 81', 'type': 'Contract', 'location': 'Remote', 'companyName': 'Company 81', 'companyUrl': 'https://company81.com', 'skills': ['React.js', 'CSS', 'HTML'], 'link': 'https://company81.com/careers'}
// ,
// {'id': 82, 'postedOn': '2023-05-22T17:04:38.224526Z', 'title': 'Job Title 82', 'type': 'Full time', 'location': 'Remote', 'companyName': 'Company 82', 'companyUrl': 'https://company82.com', 'skills': ['CSS'], 'link': 'https://company82.com/careers'}
// ,
// {'id': 83, 'postedOn': '2023-05-22T17:04:38.224534Z', 'title': 'Job Title 83', 'type': 'Full time', 'location': 'Office', 'companyName': 'Company 83', 'companyUrl': 'https://company83.com', 'skills': ['React.js'], 'link': 'https://company83.com/careers'}
// ,
// {'id': 84, 'postedOn': '2023-05-22T17:04:38.224539Z', 'title': 'Job Title 84', 'type': 'Part time', 'location': 'Remote', 'companyName': 'Company 84', 'companyUrl': 'https://company84.com', 'skills': ['Python', 'CSS', 'Java'], 'link': 'https://company84.com/careers'}
// ,
// {'id': 85, 'postedOn': '2023-05-22T17:04:38.224545Z', 'title': 'Job Title 85', 'type': 'Part time', 'location': 'Remote', 'companyName': 'Company 85', 'companyUrl': 'https://company85.com', 'skills': ['JavaScript', 'Java', 'React.js', 'Node.js'], 'link': 'https://company85.com/careers'}
// ,
// {'id': 86, 'postedOn': '2023-05-22T17:04:38.224550Z', 'title': 'Job Title 86', 'type': 'Contract', 'location': 'Office', 'companyName': 'Company 86', 'companyUrl': 'https://company86.com', 'skills': ['CSS'], 'link': 'https://company86.com/careers'}
// ,
// {'id': 87, 'postedOn': '2023-05-22T17:04:38.224556Z', 'title': 'Job Title 87', 'type': 'Contract', 'location': 'Office', 'companyName': 'Company 87', 'companyUrl': 'https://company87.com', 'skills': ['React.js', 'Java', 'HTML', 'Node.js'], 'link': 'https://company87.com/careers'}
// ,
// {'id': 88, 'postedOn': '2023-05-22T17:04:38.224562Z', 'title': 'Job Title 88', 'type': 'Full time', 'location': 'Remote', 'companyName': 'Company 88', 'companyUrl': 'https://company88.com', 'skills': ['HTML', 'Python', 'JavaScript', 'Node.js'], 'link': 'https://company88.com/careers'}
// ,
// {'id': 89, 'postedOn': '2023-05-22T17:04:38.224567Z', 'title': 'Job Title 89', 'type': 'Part time', 'location': 'Remote', 'companyName': 'Company 89', 'companyUrl': 'https://company89.com', 'skills': ['JavaScript', 'Node.js', 'HTML', 'Java'], 'link': 'https://company89.com/careers'}
// ,
// {'id': 90, 'postedOn': '2023-05-22T17:04:38.224572Z', 'title': 'Job Title 90', 'type': 'Full time', 'location': 'Office', 'companyName': 'Company 90', 'companyUrl': 'https://company90.com', 'skills': ['JavaScript', 'HTML'], 'link': 'https://company90.com/careers'}
// ,
// {'id': 91, 'postedOn': '2023-05-22T17:04:38.224578Z', 'title': 'Job Title 91', 'type': 'Contract', 'location': 'Office', 'companyName': 'Company 91', 'companyUrl': 'https://company91.com', 'skills': ['React.js', 'Java', 'Node.js', 'JavaScript'], 'link': 'https://company91.com/careers'}
// ,
// {'id': 92, 'postedOn': '2023-05-22T17:04:38.224585Z', 'title': 'Job Title 92', 'type': 'Full time', 'location': 'Office', 'companyName': 'Company 92', 'companyUrl': 'https://company92.com', 'skills': ['JavaScript', 'CSS'], 'link': 'https://company92.com/careers'}
// ,
// {'id': 93, 'postedOn': '2023-05-22T17:04:38.224594Z', 'title': 'Job Title 93', 'type': 'Part time', 'location': 'Office', 'companyName': 'Company 93', 'companyUrl': 'https://company93.com', 'skills': ['HTML', 'Node.js', 'Java'], 'link': 'https://company93.com/careers'}
// ,
// {'id': 94, 'postedOn': '2023-05-22T17:04:38.224607Z', 'title': 'Job Title 94', 'type': 'Part time', 'location': 'Office', 'companyName': 'Company 94', 'companyUrl': 'https://company94.com', 'skills': ['JavaScript', 'Python', 'React.js'], 'link': 'https://company94.com/careers'}
// ,
// {'id': 95, 'postedOn': '2023-05-22T17:04:38.224620Z', 'title': 'Job Title 95', 'type': 'Contract', 'location': 'Office', 'companyName': 'Company 95', 'companyUrl': 'https://company95.com', 'skills': ['Java', 'Python', 'JavaScript'], 'link': 'https://company95.com/careers'}
// ,
// {'id': 96, 'postedOn': '2023-05-22T17:04:38.224632Z', 'title': 'Job Title 96', 'type': 'Full time', 'location': 'Office', 'companyName': 'Company 96', 'companyUrl': 'https://company96.com', 'skills': ['Node.js', 'JavaScript'], 'link': 'https://company96.com/careers'}
// ,
// {'id': 97, 'postedOn': '2023-05-22T17:04:38.224648Z', 'title': 'Job Title 97', 'type': 'Part time', 'location': 'Remote', 'companyName': 'Company 97', 'companyUrl': 'https://company97.com', 'skills': ['CSS', 'React.js', 'Python', 'JavaScript'], 'link': 'https://company97.com/careers'}
// ,
// {'id': 98, 'postedOn': '2023-05-22T17:04:38.224657Z', 'title': 'Job Title 98', 'type': 'Contract', 'location': 'Office', 'companyName': 'Company 98', 'companyUrl': 'https://company98.com', 'skills': ['Java', 'HTML', 'CSS'], 'link': 'https://company98.com/careers'}
// ,
// {'id': 99, 'postedOn': '2023-05-22T17:04:38.224669Z', 'title': 'Job Title 99', 'type': 'Full time', 'location': 'Remote', 'companyName': 'Company 99', 'companyUrl': 'https://company99.com', 'skills': ['HTML'], 'link': 'https://company99.com/careers'}
// ,
// {'id': 100, 'postedOn': '2023-05-22T17:04:38.224675Z', 'title': 'Job Title 100', 'type': 'Contract', 'location': 'Remote', 'companyName': 'Company 100', 'companyUrl': 'https://company100.com', 'skills': ['CSS', 'React.js', 'Node.js', 'Java'], 'link': 'https://company100.com/careers'}
// ,
// ];