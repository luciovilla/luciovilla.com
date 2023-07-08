import ArrowIcon from "@components/icons/ArrowIcon";

import Award from "./Award";
import { twenty18, twenty19, twenty20, twenty21 } from "./data";

export default function Awards() {
  return (
    <section className="relative m-auto w-full max-w-2xl pb-40" id="awards">
      <div className="mb-10 w-full text-center uppercase text-gray-600">
        Awards & Honors <ArrowIcon />
      </div>

      <div className="mx-auto w-full">
        <div className="flex flex-wrap justify-center">
          <div className="w-full">
            <div className="relative mb-8 flex w-full min-w-0 flex-col">
              <div className="flex-auto px-4 text-gray-700">
                <div className="-ml-4 text-xl font-semibold">2021</div>
                <ul className="mt-4 list-outside list-disc space-y-1">
                  {twenty21.map((award, idx) => {
                    return <Award award={award} key={idx} />;
                  })}
                </ul>
                <div className="-ml-4 mt-4 text-xl font-semibold">2020</div>
                <ul className="mt-4 list-outside list-disc space-y-1">
                  {twenty20.map((award, idx) => {
                    return <Award award={award} key={idx} />;
                  })}
                </ul>
                <div className="-ml-4 mt-4 text-xl font-semibold">2019</div>
                <ul className="mt-4 list-outside list-disc space-y-1">
                  {twenty19.map((award, idx) => {
                    return <Award award={award} key={idx} />;
                  })}
                </ul>
                <div className="-ml-4 mt-4 text-xl font-semibold">2018</div>
                <ul className="mt-4 list-outside list-disc space-y-1">
                  {twenty18.map((award, idx) => {
                    return <Award award={award} key={idx} />;
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
