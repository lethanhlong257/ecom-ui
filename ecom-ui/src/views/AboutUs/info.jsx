import React from 'react';

export function visionAndMission() {
    return (
        <div>
            <i>
                {
                    'As our name suggests, at Fresh Fruits Company, ' +
                    'our vision is to supply every one of our customers with the freshest, ' +
                    'highest quality fruit and vegetables. ' +
                    'In a country of expatriates, we aim to source products from every country, ' +
                    'so everyone has a taste of home—and the exotic flavours they may have never tried—all ' +
                    'with our signature freshness. '
                }
                <br />
                <br />
                {
                    'Add to this our desire to supply you and your customers delicious foods at a price that ' +
                    'is as terrific as the taste. '
                }
                <br />
                <br />
                {
                    'We achieve our quality through a rigorous selection of farms and partner suppliers who ' +
                    'share our vision of affordable quality, as well as our insistence on operating a short supply chain; ' +
                    'a dedicated and ultra-efficient logistics system, and a brand new, state-of-the-art storage facility that ' +
                    'underscores our commitment to fast, fresh delivery. '
                }
                <br />
                <br />
                {
                    'At Fresh Fruits, we deliver a whole world of freshness—no matter who, ' +
                    'or where you are.'
                }
            </i>
        </div>
    );
}

export function coreValues() {
    return (
        <div>
            <i>
                {
                    'At Fresh Fruits, we believe customer satisfaction begins with the earth: ' +
                    'the land from which the grower creates fine brands and fine produce that are key to our ' +
                    'way of doing business.'
                }
                <br />
                <br />
                {
                    'We believe that integrity, trustworthiness and honesty are integral to who ' +
                    'we are as a company, and so, we insist that at every stage of what we do, ' +
                    'Fresh Fruits works in partnership with our suppliers,. We insist on ‘Fair Trade’ ' +
                    'principles and ethical business practices that support even the smallest grower.'
                }
                <br />
                <br />
                {
                    'It is this passion for getting things right and our refusal ' +
                    'to compromise on quality that have established our reputation for nearly four decades.'
                }
            </i>
        </div>
    );
}

export function history() {
    return (
        <table cellPadding="15px" cellSpacing="5px" width="100%" style={{ fontStyle: "italic" }}>
            <tr>
                <td><b style={{ fontSize: "22px" }}>{'2014'}</b></td>
                <td>
                    <b>{
                        'LAUNCH THE FIRST SHOP at 86-88 Cao Thang.'
                    }</b>
                    <br />
                    {
                        'After 3 years, Fruit Juice has more than 60 stores in Ho Chi Minh City.'
                    }
                </td>
            </tr>
            <tr>
                <td><b style={{ fontSize: "22px" }}>{'2015'}</b></td>
                <td>
                    <b>{
                        'THE FRUIT JUICE HAVE FACES IN HANOI'
                    }</b>
                    <br />
                    {
                        'So far, the Fruit Juice has 14 stores in the central area of ​​Hanoi Capital.'
                    }
                </td>
            </tr>
            <tr>
                <td><b style={{ fontSize: "22px" }}>{'2017'}</b></td>
                <td>
                    <b>{
                        'HELLO DANANG, BIEN HOA AND VUNG TAU'
                    }</b>
                    <br />
                    {
                        'We bring a more widespread "Going to Fruit Juice" experience, to Da Nang, Bien Hoa and Vung Tau.'
                    }
                </td>
            </tr>
            <tr>
                <td><b style={{ fontSize: "22px" }}>{'2019'}</b></td>
                <td>
                    <b>{
                        'CONQUER THE JOURNEY "FROM THE FARM TO FRUIT"'
                    }</b>
                    <br />
                    {
                        'Where The Fruit Juice shares the whole story of "fruit juice" passion with the same people.'
                    }
                    <br />
                    {
                        'After 4 years of launching and operating in Vietnam, ' +
                        'The Fruit Juice officially exceeded the threshold of 100 stores, ' +
                        'with the desire "Everyone has a Fruit Juice near the house".'
                    }
                </td>
            </tr>
        </table>
    );
}
