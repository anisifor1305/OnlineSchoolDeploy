import { useState } from "react";

function Videos(props) {
    const [imageSrc, setImageSrc] = useState('/images/defaultPreview.jpg');

    fetch('/images/photo.jpg', { method: 'HEAD' })
    .then(response => {
        if (response.ok) {
        setImageSrc('/images/photo.jpg'); // устанавливаем нужное изображение
        }
    })
    .catch(error => console.error('Ошибка загрузки:', error));
    let id =1;
    const listVideos = props.videoNames.map((name)=>
           <a className="vbuttonblock_c" id={id} href={'/lesson/'+ props.courseId + id}>
                <div className="vbutton_c">
                    <div class="image_block">
                        <img className="vbimage_c" src={imageSrc} alt=""></img>
                        {/* <img className="eye_c" src="/images/weye.png" alt=""></img> */}
                        {/* <div className="checked_c">Просмотрено</div> */}
                        <img className="play_c" src="/images/play.png" alt=""></img>
                    </div>
                    <div className="lessonnumber_c">Урок {id++}</div>
                    <div className="lessonname_c"> {name} </div>
                </div>
            </a>
    )
return <div className="row_с">{listVideos}</div>;

}

export default Videos;