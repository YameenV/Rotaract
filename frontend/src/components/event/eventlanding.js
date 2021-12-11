import '../../css/event.css'

const Eventlanding = () => {

    const data = [
        {
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Bharatiya_Janata_Party_logo.svg/1200px-Bharatiya_Janata_Party_logo.svg.png",
            "title": "Bhartiya Janta Party",
            "Description": "The Bharatiya Janata Party is one of two major political parties in India, along with the Indian National Congress. It has been the ruling political party of the Republic of India since 2014. The BJP is a right-wing party, and its policy has historically reflected Hindu nationalist positions. ",
        },
        {
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Bharatiya_Janata_Party_logo.svg/1200px-Bharatiya_Janata_Party_logo.svg.png",
            "title": "Bhartiya Janta Party",
            "Description": " The Bharatiya Janata Party is one of two major political parties in India, along with the Indian National Congress. It has been the ruling political party of the Republic of India since 2014. The BJP is a right-wing party, and its policy has historically reflected Hindu nationalist positions. ",
        },
        {
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Bharatiya_Janata_Party_logo.svg/1200px-Bharatiya_Janata_Party_logo.svg.png",
            "title": "Bhartiya Janta Party",
            "Description": "The Bharatiya Janata Party is one of two major political parties in India, along with the Indian National Congress. It has been the ruling political party of the Republic of India since 2014. The BJP is a right-wing party, and its policy has historically reflected Hindu nationalist positions. ",
        },
        {
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Bharatiya_Janata_Party_logo.svg/1200px-Bharatiya_Janata_Party_logo.svg.png",
            "title": "Bhartiya Janta Party",
            "Description": "The Bharatiya Janata Party is one of two major political parties in India, along with the Indian National Congress. It has been the ruling political party of the Republic of India since 2014. The BJP is a right-wing party, and its policy has historically reflected Hindu nationalist positions. ",
        },
        {
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Bharatiya_Janata_Party_logo.svg/1200px-Bharatiya_Janata_Party_logo.svg.png",
            "title": "Bhartiya Janta Party",
            "Description": "The Bharatiya Janata Party is one of two major political parties in India, along with the Indian National Congress. It has been the ruling political party of the Republic of India since 2014. The BJP is a right-wing party, and its policy has historically reflected Hindu nationalist positions. ",
        },
        {
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Bharatiya_Janata_Party_logo.svg/1200px-Bharatiya_Janata_Party_logo.svg.png",
            "title": "Bhartiya Janta Party",
            "Description": "The Bharatiya Janata Party is one of two major political parties in India, along with the Indian National Congress. It has been the ruling political party of the Republic of India since 2014. The BJP is a right-wing party, and its policy has historically reflected Hindu nationalist positions. ",
        },
        {
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Bharatiya_Janata_Party_logo.svg/1200px-Bharatiya_Janata_Party_logo.svg.png",
            "title": "Bhartiya Janta Party",
            "Description": "The Bharatiya Janata Party is one of two major political parties in India, along with the Indian National Congress. It has been the ruling political party of the Republic of India since 2014. The BJP is a right-wing party, and its policy has historically reflected Hindu nationalist positions. ",
        },
        {
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Bharatiya_Janata_Party_logo.svg/1200px-Bharatiya_Janata_Party_logo.svg.png",
            "title": "Bhartiya Janta Party",
            "Description": "The Bharatiya Janata Party is one of two major political parties in India, along with the Indian National Congress. It has been the ruling political party of the Republic of India since 2014. The BJP is a right-wing party, and its policy has historically reflected Hindu nationalist positions. ",
        },
        {
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Bharatiya_Janata_Party_logo.svg/1200px-Bharatiya_Janata_Party_logo.svg.png",
            "title": "Bhartiya Janta Party",
            "Description": "The Bharatiya Janata Party is one of two major political parties in India, along with the Indian National Congress. It has been the ruling political party of the Republic of India since 2014. The BJP is a right-wing party, and its policy has historically reflected Hindu nationalist positions. ",
        },
        {
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Bharatiya_Janata_Party_logo.svg/1200px-Bharatiya_Janata_Party_logo.svg.png",
            "title": "Bhartiya Janta Party",
            "Description": "The Bharatiya Janata Party is one of two major political parties in India, along with the Indian National Congress. It has been the ruling political party of the Republic of India since 2014. The BJP is a right-wing party, and its policy has historically reflected Hindu nationalist positions. ",
        },

    ]

    return (
        <div className="event_main">
            <div className="event_header">events</div>
            <div className="sphere">
                <div className="ann_sphere1">
                </div>
                <div className="ann_sphere2">
                </div>
                <div className="ann_sphere3">

                </div>
                <div className="ann_sphere4">
                </div>
                <div className="ann_sphere5">
                </div>
            </div>
            <div className="Events">
                {
                    data.map((items) =>
                        <div className="event">
                            <div className="images"  >
                                <img className="event_img" src={items.image}></img>
                            </div>

                            <div className="title">
                                {items.title}
                            </div>

                            <div className="description">
                                {items.Description}
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )

}

export default Eventlanding