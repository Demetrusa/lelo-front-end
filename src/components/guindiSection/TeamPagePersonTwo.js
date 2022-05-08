import React from 'react'
import Footer from '../footer/Footer';
import Navigation from '../navigation/Navigation';
import "./TeamPage.css"
import secondGuy from "../../images/Rectangle 236.svg"


function TeamPagePersonTwo() {
   
  return (
    <div>
        <div className="teamPage-text">
            <div className="team-nav">
                <Navigation flex="true"/>
            </div>
            <div className="friends-cointaner">
                <div className="teamPage-main-wrap">
                    <div className="team-first-line-wrap">
                        <div className="team-first-line-leftt-wrap">
                            <h2>Lorem Ipsum</h2>
                            <h3 className=''>Lorem Ipsum is simply </h3>
                            <p>
                            Lorem Ipsum“Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit…”
                            “There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain…
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s
                            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to 
                            </p>
                        </div>
                        <div className="team-first-line-right-wrap">
                            <img src={secondGuy} alt="person-image" />
                        </div>
                    </div>
                    <div className="team-second-line-wrap">
                        <div className="team-text-wrap">
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                                Vero commodi magnam velit voluptate. Voluptates ex natus
                                 optio dolor laboriosam rerum sunt rem ullam. Perspiciatis
                                  animi incidunt nihil eius earum ducimus eaque similique 
                                  sunt repellat alias magni, temporibus nulla cum commodi? 
                                  Dicta cumque earum perspiciatis, est esse molestiae odit
                                  qui consequuntur quas, reiciendis sed praesentium hic 
                                  voluptatem dolore rerum doloribus aperiam.
                            </p>
                        </div>
                        <div className="team-text-wrap">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, 
                                laboriosam. Accusamus cumque voluptatum itaque asperiores voluptate
                                 neque blanditiis praesentium, quibusdam temporibus quis corporis!
                                  Quisquam atque odit officiis laboriosam qui? Aliquid tempore a saepe,
                                   illo iste obcaecati harum? Nihil est laudantium, magni fuga repellendus
                                   , vitae tempora totam vero perferendis quisquam in vel possimus harum animi
                                    qui ipsa suscipit minima repudiandae doloribus iste impedit expedita
                                     distinctio repellat ullam? Obcaecati necessitatibus corrupti ullam 
                                     voluptate nostrum quam, maxime vero facere placeat amet a ea.</p>
                        </div>
                        <div className="team-text-wrap">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi at adipisci culpa 
                                vero aspernatur accusamus facilis autem explicabo, cumque odio incidunt reiciendis
                                 quisquam expedita? Quae, ipsam mollitia est expedita ex asperiores voluptates 
                                 officia fuga voluptatibus, ab, totam deleniti eos adipisci. Ullam maiores quae
                                  commodi odio, ratione esse! Dolorum nemo aut suscipit ipsa libero at minima 
                                  culpa voluptatem. Odit vel culpa commodi hic, omnis corrupti consectetur dicta
                                   illo sunt in quibusdam fugit error mollitia, suscipit eius unde! Perspiciatis 
                                   tempore qui voluptatem quos nesciunt repellendus magnam accusantium rem cupiditate 
                                   nostrum dolorum aliquid alias labore deleniti, minima eum mollitia veniam ea 
                                   nulla nihil voluptatum iusto maxime neque! Mollitia voluptate aut fugiat culpa 
                                   accusantium eaque maiores deserunt, veritatis animi cum adipisci modi distinctio 
                                   cupiditate quidem enim! Ducimus officia odit totam distinctio accusamus, 
                                   consectetur deserunt iure repudiandae atque porro maxime, consequuntur corporis
                                    sequi dolores velit minus voluptatibus mollitia recusandae? Consequuntur,
                                    esse delectus voluptatum hic neque maxime illo necessitatibus sapiente, quaerat
                                    aliquid at deleniti cupiditate officiis corporis iste numquam iure. Ad tempore 
                                    atque deserunt id ipsam exercitationem aspernatur quis labore distinctio quam 
                                    consequatur, non fugiat voluptatibus quaerat nam autem nesciunt perferendis 
                                    possimus voluptate dolorem. Vitae illo est praesentium ducimus adipisci? 
                                    Officia sed error nihil earum eligendi?
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-countainer-for-team">
                <Footer />
            </div>
        </div>
        
    </div>
  )
}

export default TeamPagePersonTwo;