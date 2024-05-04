import React from 'react';
import { Input, Checkbox, Button, Typography } from '@material-tailwind/react';
import { Link } from 'react-router-dom';

function TestSeries() {
    return (
        <section className="m-8 flex gap-4">
            
            <div className="w-full lg:w-3/5 mt-24">
                <div className="text-center">
                    <Typography variant="h2" className="font-bold mb-4">UPSC Prelims Test Series 2023-24</Typography>
                    <Typography variant="paragraph" color="blue-gray" className="text-lg font-normal">Prepare for success in the civil services Prelims examination with the Supreme Bedi IAS Academy's Prelims Test Series. 
                    In the fast-paced world of civil services examinations, achieving success requires more than luck—it demands dedication, strategy, and unwavering commitment.

Our meticulously designed Prelims Test Series is crafted to enhance your preparation and elevate your performance. With a focus on comprehensive coverage and detailed analysis, this test series is your key to mastering the intricacies of the Prelims examination.

Join us and embark on a transformative journey towards excellence in civil services Prelims.</Typography>
                </div>
                <form className="mt-8 mb-2 mx-auto w-80 max-w-screen-lg lg:w-1/2">
                    {/* Form content here */}
                </form>
            </div>
            <div className="w-2/5 h-full hidden lg:block">
                {/* Image or additional content */}
            </div>
        </section>
    );
}

export default TestSeries;
