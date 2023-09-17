'use client';

import FlipMove from "react-flip-move";
import Thumnail from "./Thumnail";

type propsTypes = {
    results: any
}
export default function Results({ results }: propsTypes) {

    return (
        <FlipMove className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center ">
            {results && results.length > 0 &&
                results.map((result: any, index: any) => {
                    return (
                        <Thumnail
                            key={index}
                            result={result}
                        />
                    )
                })
            }
        </FlipMove>
    )
}
