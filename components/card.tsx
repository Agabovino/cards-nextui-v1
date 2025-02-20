import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";

export default function Appcard() {
  return (
    <Card className="py-4">
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="https://nextui.org/images/hero-card-complete.jpeg"
          width={270}
        />
      </CardBody>
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <h3 className="font-bold text-large">Frontend Radio</h3>
        <p className="text-tiny uppercase font-bold">Daily Mix</p>
        <small className="text-default-500">12 Tracks</small>
  
      </CardHeader>
    </Card>
  );
}