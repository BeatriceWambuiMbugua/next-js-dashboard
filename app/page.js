import Card from "@/components/card"

export default function Home() {
  return (
    <div className="container mx-auto mt-10">


      <div className="grid grid-cols-3 gap-4">
        <Card
          image={"https://img.freepik.com/free-photo/shoes_1203-8153.jpg?t=st=1730878610~exp=1730882210~hmac=24216ae814433e1773d569413cc24f18cd41486c7de2539b225e49ff3036a72f&w=1480"}
          title={"Sneakers"}
          description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
          price={"KSh 500"} />
        <Card
          image={"https://img.freepik.com/free-photo/men-shoes_1203-8440.jpg?t=st=1730879213~exp=1730882813~hmac=b53501ec698f5bcda8f54eb78c9aa22ad880a01f6e2a7abb45222c3e85dfaee8&w=1480"}
          title={"Ankle Sneakers"}
          description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
          price={"KSh 900"} />
      </div>

    </div>
  );
}
