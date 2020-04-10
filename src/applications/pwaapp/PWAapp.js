import React, { useState, useEffect } from 'react'
import Header from './containers/Header'
import MainRoutes from './routes/MainRoutes'
import video from '../../app/media/videos/sculpture.mp4'

function PWAapp() {
	// const [data, setData] = useState([])

	// useEffect(() => {
	// 	const fetchData = async () => {
	// 		const result = await fetch("https://orangevalleycaa.org/api/videos").then(
	// 			response => response.json() 
	// 		)
	// 		setData(result)
	// 	}
	// 	fetchData()
	// }, [])

	return (
		<section>
			<Header/>
			<MainRoutes/>
			{/* {data.map(video => (
				<div key={video.id}>
					<h2>{video.name}</h2>
					<video height={200} controls src={video.video_url} />
				</div>
			))} */}
			<video height={200} controls src={video} />
		</section>
	)
}

export default PWAapp