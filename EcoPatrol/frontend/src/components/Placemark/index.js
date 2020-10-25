import React from 'react'
import {Placemark} from 'react-yandex-maps';

const MyPlacemark = () => (
    <Placemark
        geometry={
            [55.4, 61.7]
        }
        properties={{
            hintContent: 'Собственный значок метки',
            balloonContent: 'Это красивая метка'
        }}
        options={{
            iconLayout: 'default#image',
            // iconImageHref: './images/logo.png',
            iconImageSize: [30, 42],
            iconImageOffset: [-3, -42]
        }}
    />
);

export default MyPlacemark