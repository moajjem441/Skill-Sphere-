'use client'
import { useSpring, animated } from '@react-spring/web';
import { useState } from 'react';

export const Animation = () => {
  const [toggle, setToggle] = useState(false);

  // useSpring এর মাধ্যমে আমরা ভ্যালুগুলো নির্ধারণ করছি
  const styles = useSpring({
    width: toggle ? 200 : 100, // বড় বা ছোট হবে
    backgroundColor: toggle ? 'blue' : 'red',
    config: { tension: 170, friction: 26 } // অ্যানিমেশনের গতি বা বাউন্স কন্ট্রোল
  });

  return (
    <div>
      <button onClick={() => setToggle(!toggle)}>অ্যানিমেশন শুরু করুন</button>
      {/* സാധാരണ div এর জায়গায় <animated.div> ব্যবহার করতে হয় */}
      <animated.div style={{ ...styles, height: 100 }}>
        আমি অ্যানিমেটেড বক্স!
      </animated.div>
    </div>
  );
};