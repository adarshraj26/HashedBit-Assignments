const states = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal"
  ];
  
  const startsWithVowel = (str) => ['a', 'e', 'i', 'o', 'u'].includes(str.toLowerCase().charAt(0));
  
  const filteredStates = states.map(state => {
    return startsWithVowel(state) ? null : state;
  }).filter(state => state !== null);
  
  console.log(filteredStates);
  