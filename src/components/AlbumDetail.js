import React from "react";
import { Text } from "react-native";
let Card = require('./Card').Card;
//import Card from './Card'

const AlbumDetail = (props) => {
    return(
        <Card props = {props}>
            <Text>{props.album.title}</Text>
        </Card>
    );
}

module.exports = {
    AlbumDetail: AlbumDetail
}