"use client";

import styles from "./page.module.css";
import { BarChart } from "@mui/x-charts";
import { axisClasses } from "@mui/x-charts/ChartsAxis";
import { useEffect, useState } from "react";

const chartSetting = {
	yAxis: [
		{
			label: "Number of People Affected",
		},
	],
	width: 950,
	height: 420,

	sx: {
		[`.${axisClasses.left} .${axisClasses.label}`]: {
			transform: "translate(-20px, 0)",
		},
	},
};

export default function Home() {
	const [chartData, setChartData] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	useEffect(() => {
		setIsLoading(true);
		fetch("covid.json", {
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
		})
			.then((res) => res.json())
			.then((resJson) => {
				setChartData(resJson);
				setIsLoading(false);
			});
	}, []);

	return (
		<div className={styles.page}>
			<h1>Number of Covid Cases over March to June, 2020.</h1>
			<main className={styles.main}>
				{isLoading ? (
					<div>Loading...</div>
				) : (
					<BarChart
						margin={{ top: 90 }}
						dataset={chartData.map((cd: any) => {
							return {
								Date: cd["Date"],
								"Total Confirmed Cases":
									typeof cd["Total Confirmed Cases"] ==
									"string"
										? Number(
												cd[
													"Total Confirmed Cases"
												].replace(" ", "")
										  )
										: cd["Total Confirmed Cases"],
								"Total Deaths":
									typeof cd["Total Deaths"] == "string"
										? Number(
												cd["Total Deaths"].replace(
													" ",
													""
												)
										  )
										: cd["Total Deaths"],
								"Total Recovered":
									typeof cd["Total Recovered"] == "string"
										? Number(
												cd["Total Recovered"].replace(
													" ",
													""
												)
										  )
										: cd["Total Recovered"],
								"Active Cases":
									typeof cd["Active Cases"] == "string"
										? Number(
												cd["Active Cases"].replace(
													" ",
													""
												)
										  )
										: cd["Active Cases"],
								"Daily Confirmed Cases":
									typeof cd["Daily Confirmed Cases"] ==
									"string"
										? Number(
												cd[
													"Daily Confirmed Cases"
												].replace(" ", "")
										  )
										: cd["Daily Confirmed Cases"],
								"Daily  deaths":
									typeof cd["Daily  deaths"] == "string"
										? Number(
												cd["Daily  deaths"].replace(
													" ",
													""
												)
										  )
										: cd["Daily  deaths"],
							};
						})}
						xAxis={[
							{
								scaleType: "band",
								dataKey: "Date",
								label: "Months",
								// data: chartData.map((cvd) => cvd["Date"]),
							},
						]}
						series={[
							{
								dataKey: "Total Confirmed Cases",
								label: "Total Confirmed Cases",
							},
							{
								dataKey: "Total Deaths",
								label: "Total Deaths",
							},
							{
								dataKey: "Total Recovered",
								label: "Total Recovered",
							},
							{
								dataKey: "Active Cases",
								label: "Active Casesl",
							},
							{
								dataKey: "Daily Confirmed Cases",
								label: "Daily Confirmed Cases",
							},
							{
								dataKey: "Daily  deaths",
								label: "Daily  deaths",
							},
						]}
						// width={500}
						// height={300}
						{...chartSetting}
					/>
				)}
			</main>
		</div>
	);
}
