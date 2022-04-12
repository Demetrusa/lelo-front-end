import React from "react";
import "./InnerNews.css"
import colisseumimage from "../../images/Rectangle 305.svg"
import dataPicker from "../../images/datapicker.svg"
import Navigation from "../navigation/Navigation";
import MainText from "../maintext/MainText";
import mainTextImg from "../../images/Rectangle 155.svg";


const InnerNews = () => {
    return (
        <div className="innerNews-wrap">
            <Navigation flex="true" />
            <div className="innerNews-wrapper">
                <div className="news-heading">
                    <h2>ლორემ იპსუმღორებმა შევჩერდი</h2>
                    <div className="empty-space-div">
                    </div>
                </div>
                <div className="news-text">
                    <p>Lorem Ipsum
                        “Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit…”
                        “There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain…”
                    </p>
                    <p>
                        What is Lorem Ipsum?
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                    <p>
                        Why do we use it?
                        ished fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for ‘lorem ipsum’ will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                    </p>
                    <p>
                        Where does it come from?
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of “de Finibus Bonorum et Malorum” (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, “Lorem ipsum dolor sit amet..”, comes from a line in section 1.10.32.
                    </p>
                    <p>
                    m used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from “de Finibus Bonorum et Malorum” by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                    </p>
                </div>
            </div>

        </div>
    )
}

export default InnerNews;