// import { promises } from "fs";
// import path from "path";
// import { NextPageContext } from 'next'

// Page.getInitialProps = async (ctx: NextPageContext) => {
//     const res = await fetch('https://api.github.com/repos/vercel/next.js')
//     const json = await res.json()
//     // return { stars: json.stargazers_count }

//     	// Get the path of the json file
// 	const filePath = path.join(process.cwd(), "/public/covid.json");
// 	// Read the json file
// 	const jsonData = await promises.readFile(filePath);
// 	// Parse data as json
// 	const objectData = JSON.parse(jsonData);

// 	return objectData;
//   }

// //   export default function Page({ stars }: { stars: number }) {
// //     return stars
// //   }

// export async function getLocalData() {
// 	// Get the path of the json file
// 	const filePath = path.join(process.cwd(), "/public/covid.json");
// 	// Read the json file
// 	const jsonData = await promises.readFile(filePath);
// 	// Parse data as json
// 	const objectData = JSON.parse(jsonData);

// 	return objectData;
// }
