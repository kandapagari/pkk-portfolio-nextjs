const objectDetection = () => {
    return (
        <div className='p-16 flex flex-col'>
            <div className="text-3xl font-bold">Example: Multiple object detection using pre trained model in TensorFlow.js</div>
            <div className='font-size:130% italic pt-8'> Difficulty: Easy</div>
            <div className='clear-both'>How to use</div>
            <p>Please wait for the model to load before trying the demos below at which point they will become visible when ready to use.</p>
            <h2>Demo: Classifying Images</h2>
            <p><em>Click on an image below</em> to try and recognize what is in the image using the power of Machine Learning! Notice how in this demo we not only know if the object is in the image, but also its position in the image. Very useful.</p>
            <div class="relative left-0 w-48% mr-2 cursor-pointer p-1 flex">
                <img className='p-2' src="https://cdn.glitch.com/74418d0b-3465-49a2-8c71-a721b7734473%2Fdogs_flickr_publicdomain.jpg?v=1579294514974" width="100%" crossorigin="anonymous" title="Click to get classification!" />
                <img className='p-2' src="https://cdn.glitch.com/74418d0b-3465-49a2-8c71-a721b7734473%2Fcats_flickr_publicdomain.jpg?v=1579294753947" width="100%" crossorigin="anonymous" title="Click to get classification!" />
            </div>

            <h2>Demo: Webcam continuous classification</h2>
            <p>Hold some objects up close to your webcam to get a real-time classification! You must be on <a href="https://codepen.io/jasonmayes/pen/qBEJxgg">the https version of the website</a> for this to work. When ready click &apos;enable webcam&apos; below and accept access to the webcam when the browser asks (check the top left of your window)</p>
            <div id="liveView" class="flex flex-col">
                <button id="webcamButton">Enable Webcam</button>
                <video id="webcam" autoplay></video>
            </div>
        </div>
    )
}

export default objectDetection;