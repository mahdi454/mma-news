import Image from "next/image";

export default function ProfilePic() {
  return (
    <section>
        <Image
        className="mx-auto rounded-full mt-5 border-2 p-[2px] border-gray-400"
         src='/image/photo.jpg'
         alt="madi"
         width={200}
         height={200}
         priority={true}
         />
    </section>
  )
}
