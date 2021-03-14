import React from 'react';
import autobotIcon from '../../assets/icons/autobot.png'
import beachIcon from '../../assets/icons/beach.png'
import beerIcon from '../../assets/icons/beer.png'
import bookIcon from '../../assets/icons/book.png'
import booksIcon from '../../assets/icons/books.png'
import brainIcon from '../../assets/icons/brain.png'
import cheeseIcon from '../../assets/icons/cheese.png'
import codeIcon from '../../assets/icons/code.png'
import coffeebeanIcon from '../../assets/icons/coffeebean.png'
import cogsIcon from '../../assets/icons/cogs.png'
import comIcon from '../../assets/icons/com.png'
import controllerIcon from '../../assets/icons/controller.png'
import devIcon from '../../assets/icons/dev.png'
import ffviiIcon from '../../assets/icons/ffvii.png'
import foodIcon from '../../assets/icons/food.png'
import footballIcon from '../../assets/icons/football.png'
import futuristIcon from '../../assets/icons/futurist.png'
import golfIcon from '../../assets/icons/golf.png'
import graphIcon from '../../assets/icons/graph.png'
import handshakeIcon from '../../assets/icons/handshake.png'
import handshareIcon from '../../assets/icons/handshare.png'
import hardworkingIcon from '../../assets/icons/hardworking.png'
import heartIcon from '../../assets/icons/heart.png'
import hotelIcon from '../../assets/icons/hotel.png'
import javascriptIcon from '../../assets/icons/javascript.png'
import laptopIcon from '../../assets/icons/laptop.png'
import leaderIcon from '../../assets/icons/leader.png'
import lightbulbIcon from '../../assets/icons/lightbulb.png'
import mountainsIcon from '../../assets/icons/mountains.png'
import mugIcon from '../../assets/icons/mug.png'
import pencilIcon from '../../assets/icons/pencil.png'
import phoneIcon from '../../assets/icons/phone.png'
import planeIcon from '../../assets/icons/plane.png'
import popcornIcon from '../../assets/icons/popcorn.png'
import presenterIcon from '../../assets/icons/presenter.png'
import robotIcon from '../../assets/icons/robot.png'
import teaIcon from '../../assets/icons/tea.png'
import tennisIcon from '../../assets/icons/tennis.png'
import thoughtIcon from '../../assets/icons/thought.png'
import ukflagIcon from '../../assets/icons/ukflag.png'
import weightsIcon from '../../assets/icons/weights.png'
import whyIcon from '../../assets/icons/why.png'
import wineIcon from '../../assets/icons/wine.png'
import writingIcon from '../../assets/icons/writing.png'
import wwwIcon from '../../assets/icons/www.png'
import './InterestCrown.scss';

function InterestCrown() {
    return (
        <header className="interests">
            <div className="interests__left">
                <div className="interests__left-top">
                    <img src={writingIcon} alt="writing icon" className="interests__icon interests__icon-writing"/>
                    <img src={presenterIcon} alt="presenter icon" className="interests__icon interests__icon-presenter"/>
                    <img src={ukflagIcon} alt="ukflag icon" className="interests__icon interests__icon-ukflag"/>
                    <img src={devIcon} alt="dev icon" className="interests__icon interests__icon-dev"/>
                    <img src={robotIcon} alt="robot icon" className="interests__icon interests__icon-robot"/>
                    <img src={planeIcon} alt="plane icon" className="interests__icon interests__icon-plane"/>
                    <img src={wineIcon} alt="wine icon" className="interests__icon interests__icon-wine"/>
                    <img src={controllerIcon} alt="controller icon" className="interests__icon interests__icon-controller"/>
                    <img src={cheeseIcon} alt="cheese icon" className="interests__icon interests__icon-cheese"/>
                    <img src={handshareIcon} alt="handshare icon" className="interests__icon interests__icon-handshare"/>
                    <img src={bookIcon} alt="book icon" className="interests__icon interests__icon-book"/>
                    <img src={footballIcon} alt="football icon" className="interests__icon interests__icon-football"/>
                </div>
                <div className="interests__left-bottom">
                    <img src={javascriptIcon} alt="javascript icon" className="interests__icon interests__icon-javascript"/>
                    <img src={comIcon} alt="com icon" className="interests__icon interests__icon-com"/>
                    <img src={hotelIcon} alt="hotel icon" className="interests__icon interests__icon-hotel"/>
                    <img src={brainIcon} alt="brain icon" className="interests__icon interests__icon-brain"/>
                    <img src={lightbulbIcon} alt="lightbulb icon" className="interests__icon interests__icon-lightbulb"/>
                    <img src={cogsIcon} alt="cogs icon" className="interests__icon interests__icon-cogs"/>
                    <img src={golfIcon} alt="golf icon" className="interests__icon interests__icon-golf"/>
                    {/* <img src={codeIcon} alt="code icon" className="interests__icon interests__icon-code"/> */}
                    <img src={pencilIcon} alt="pencil icon" className="interests__icon interests__icon-pencil"/>
                </div>
            </div>
            <div className="interests__center">
                <img src={hardworkingIcon} alt="hardworking icon" className="interests__icon interests__icon-hardworking"/>
                <img src={laptopIcon} alt="laptop icon" className="interests__icon interests__icon-laptop"/>
                <img src={leaderIcon} alt="leader icon" className="interests__icon interests__icon-leader"/>
            </div>
            <div className="interests__right">
                <div className="interests__right-top">
                    <img src={handshakeIcon} alt="handshake icon" className="interests__icon interests__icon-handshake"/>
                    <img src={whyIcon} alt="why icon" className="interests__icon interests__icon-why"/>
                    <img src={mugIcon} alt="mug icon" className="interests__icon interests__icon-mug"/>
                    <img src={popcornIcon} alt="popcorn icon" className="interests__icon interests__icon-popcorn"/>
                    <img src={heartIcon} alt="heart icon" className="interests__icon interests__icon-heart"/>
                    <img src={beerIcon} alt="beer icon" className="interests__icon interests__icon-beer"/>
                    <img src={ffviiIcon} alt="ffvii icon" className="interests__icon interests__icon-ffvii"/>
                    <img src={booksIcon} alt="books icon" className="interests__icon interests__icon-books"/>
                    <img src={wwwIcon} alt="www icon" className="interests__icon interests__icon-www"/>
                    <img src={autobotIcon} alt="autobot icon" className="interests__icon interests__icon-autobot"/>
                    <img src={foodIcon} alt="food icon" className="interests__icon interests__icon-food"/>
                    <img src={coffeebeanIcon} alt="coffeebean icon" className="interests__icon interests__icon-coffeebean"/>
                </div>
                <div className="interests__right-bottom">
                    <img src={weightsIcon} alt="weights icon" className="interests__icon interests__icon-weights"/>
                    <img src={graphIcon} alt="graph icon" className="interests__icon interests__icon-graph"/>
                    <img src={mountainsIcon} alt="mountains icon" className="interests__icon interests__icon-mountains"/>
                    <img src={futuristIcon} alt="futurist icon" className="interests__icon interests__icon-futurist"/>
                    <img src={tennisIcon} alt="tennis icon" className="interests__icon interests__icon-tennis"/>
                    <img src={teaIcon} alt="tea icon" className="interests__icon interests__icon-tea"/>
                    <img src={phoneIcon} alt="phone icon" className="interests__icon interests__icon-phone"/>
                    <img src={beachIcon} alt="beach icon" className="interests__icon interests__icon-beach"/>
                    <img src={thoughtIcon} alt="thought icon" className="interests__icon interests__icon-thought"/>
                </div>
            </div>
        </header>
    )
}

export default InterestCrown
