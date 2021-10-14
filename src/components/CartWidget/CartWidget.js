import { createElement, useState} from "react";

export default function cartWidget() {
    return (
        <div class="counter-conteiner">
            <span id="counter"></span>
                <i className="fas fa-shopping-cart"></i>
        </div>
    );
}