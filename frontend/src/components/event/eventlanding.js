import '../../css/event.css'

import eve from '../../background/event.mp4'
import { GiLevelFour } from 'react-icons/gi'
import HeaderNav from '../header/headerNav'
import Navbar from '../navbar/navbar'
import testimg from "../../imgs/Ashutoast.jpg";
const Eventlanding = (props) => {
  let data = props.data;
  console.log(data);

  return data.length > 0 ? (
    <div className="event_main">
      <video
        autoPlay
        muted
        loop
        style={{
          objectFit: "cover",
          width: "100%",
          height: "100%",
          zIndex: "-1",
          position: "fixed",
          left: "0",
        }}
      >
        <source src={eve} type="video/mp4" />
      </video>

      <div className="event_header">events</div>
      <div className="Events">
        {data.map((items) => (
          <div className="event">
            <div className="images">
              <img className="event_img" src={items.img}></img>
            </div>

            <div className="title">{items.title}</div>

            <div className="description">{items.description}</div>
          </div>
        ))}
      </div>
    </div>
  ) : (
    <div className="event_main">
      <Navbar />
      <video
        autoPlay
        muted
        loop
        style={{
          position: "absolute",
          objectFit: "cover",
          width: "100%",
          height: "100%",
          zIndex: "-1",
          position: "fixed",
          left: "0",
          overflow: "hidden",
        }}
      >
        <source src={eve} type="video/mp4" />
      </video>

      <div className="event_header">events</div>
      <div className="evnt_main_con">
        <div className="event">
          <img className="event_img" src={testimg}></img>

          <div className="title">Garbe ki Shaam</div>

          <div className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            luctus hendrerit orci. Nunc vulputate in sapien at dignissim. In
            purus elit, ullamcorper nec neque ac, volutpat consectetur tortor.
            Donec viverra vel turpis ac mollis. Etiam viverra ipsum quis metus
            molestie, eget convallis nisi fringilla. Praesent a lorem viverra,
            pellentesque magna et, ornare tortor. Phasellus porttitor rhoncus
            lorem, ut facilisis libero venenatis eget. Etiam vel tellus sem.
            Mauris vel orci semper, vehicula augue eu, posuere urna. Sed
            sagittis ligula et turpis semper efficitur. Proin et risus tempus
            risus tristique pretium. Cras quam felis, rhoncus sit amet venenatis
            sit amet, imperdiet ut elit. Sed sapien erat, lobortis quis nunc
            quis, pulvinar placerat felis. Suspendisse luctus luctus euismod.
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Sed lorem ipsum, fermentum vitae rutrum a,
            ultricies lobortis nibh. Sed vehicula tellus ac lectus rhoncus, non
            ultricies mi finibus. Nulla non varius erat. Curabitur nec laoreet
            quam. Aenean lectus neque, congue in efficitur nec, fringilla nec
            tortor. Nunc vitae viverra diam, nec feugiat lorem. Phasellus sit
            amet interdum quam. Sed consequat vel neque vitae gravida. Nam et
            purus ex. In ut diam purus. Praesent vulputate ultrices mauris, eu
            euismod metus viverra in. Sed rhoncus tempor ante, eu rhoncus augue
            sodales ornare. Sed fringilla metus eget nunc viverra vulputate.
            Pellentesque tellus tellus, posuere vel gravida sit amet, ultricies
            vel tortor. Quisque in posuere massa. Sed in quam euismod,
            ullamcorper orci eu, lacinia justo. Integer sed mattis purus. In
            neque orci, feugiat ac congue eget, rhoncus id ligula. In vitae
            augue ex. Praesent imperdiet eget risus quis sodales. Nullam mauris
            massa, efficitur a posuere et, vehicula eu lacus. Ut a tellus sem.
            Curabitur molestie nisl vel maximus sagittis. Morbi finibus nunc at
            tellus facilisis condimentum. Vestibulum id lobortis massa. Nulla
            nec egestas purus. Integer ac nibh mauris. Mauris pharetra vehicula
            rhoncus. Fusce eu quam eget justo sollicitudin accumsan nec id leo.
            Donec laoreet dui vel justo varius, eget fringilla turpis rhoncus.
            Aenean hendrerit massa eros, sed vestibulum velit molestie quis.
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Vivamus ex justo, tincidunt quis pretium
            et, dapibus et nulla. Donec sed lectus orci. Curabitur sodales porta
            molestie. Maecenas blandit dictum auctor. Ut tincidunt tellus sit
            amet vehicula scelerisque. Sed sollicitudin leo sem, tempor egestas
            purus vulputate ut. Aliquam id viverra felis. Vestibulum ante ipsum
            primis in faucibus orci luctus et ultrices posuere cubilia curae; In
            nec ligula nec ante consectetur aliquet. Aenean pellentesque lectus
            ac condimentum egestas. Proin sed odio lobortis, luctus velit sed,
            faucibus ante. Morbi hendrerit auctor massa sed scelerisque.
            Suspendisse eu luctus augue. Nullam dignissim nulla quis lorem
            dictum rutrum non a lacus. Sed venenatis ipsum erat, non lobortis
            est sodales ut. Integer interdum ut enim vel pulvinar. Integer eu
            maximus nisi. Nunc tempor vitae justo sed gravida.
          </div>
        </div>
        <div className="event">
          <img className="event_img" src={testimg}></img>

          <div className="title">No events till now</div>

          <div className="description">
            The server may be down, please wait for a while
          </div>
        </div>
        <div className="event">
          <img className="event_img" src={testimg}></img>

          <div className="title">No events till now</div>

          <div className="description">
            The server may be down, please wait for a while
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eventlanding