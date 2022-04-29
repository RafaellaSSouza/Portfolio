<template>
    <main class=" h-screen bg-blue-100">
        <section class=" flex items-center justify-center w-full">
            <div class="w-3/4">
                <h1>Quem sou</h1>
                <p>Oi, meu nome é Rafaella.
                    Nasci em uma geração introduzida à tecnologia, então dsnvolvi uma afinidade com computadoes smartphones e softweares, alem disso sempre tive contato com. sempre usei a tecnolofia em estudos e adquirir Conhecimentos. mas me encanteu ainda mais quando passei a utilizala como desenvolvedora.  desde entapo percbi que alem da tecnologia me ajudar  ela poderia me auxiliar a resolver problemas.  

                </p>
            </div>
            <img class="w-1/4" src="IMG_6843-removebg-preview.jpg" alt="perfil">
        </section>

        <section class="flex justify-around mb-10">
            <Card 
            descricao="Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo natus atque at voluptas illum doloremque consequuntur blanditiis neque, minima id consequatur praesentium perferendis vero quia cum officia, ex eveniet minus." 
            imagem="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHoAwwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAACAAEDBAUGBwj/xAA7EAABAwIDBQUHAQYHAAAAAAABAAIDBBEFEiETMVFhcRQiQVKBBhUyQmKRwbEHI0OCoeEWNERTctHx/8QAGQEAAwEBAQAAAAAAAAAAAAAAAQIDAAQF/8QAJREAAgIBAwUBAAMBAAAAAAAAAAECEQMSFCEEEzFBUTJSYpEi/9oADAMBAAIRAxEAPwDxJJMkrCiSTpIUYQA8U3inSWowySdMtRhJBJJAw6Q1SRNasYcBG1qTQpWNQFYmhEGog1SNYmSFsANRhqkDCpGxqqQtkQajDVMI0YjTqIuohDEYYpmxqQMVVEVsgDEYYphGQiDE6iLZDlSVnZpLaQajjkk6S4TtGSTpLGBTp0yBhJxcmwCSISFoszTmFgiMbwMxY4DjZK27TepIaidjrsmkBHBy16PDzjDZRCwMrY43S5Wiwma0XNh5gNbeIBQfAUrMS2qlYxWX0UjPiaQeFkmxEHclsV8ANYpmRqWOI8FYZCeCaKJORXbGpWxq0yDkpmQcleMCbkVGxKRsSuNgPBSCDkrKBNzKYjRiJXGwclIIOSooiayk2JGIuSuiE8EbYTwTqIrmU2xIxCrggPBGIeSZRFcyjsklobHkkjpF1nmpCaxRpLyz1gLJI01ljApIrJWWMCkiskRY6hYxJTMzSBesfstwCKtxKnnLsr4nh4PQjT8LyeF+V116R7AYm/DxLitTJsqOkF23/jS/LG3jrqeAHNSypuPBTG1ZtftE9l6fCql/ZgAx5LmgaWHBedupbPOi63FvaOoxuR0k7rucb9Fnx0Zcb5d6jhT8Ml1GRJmVFS8lajpOS2YsPNvh/orTKA+VehCB50sxiMpeSmbS8lttoT5VIKLkulRIvKYjaXkjbTLbFFyRCj+lPQjyGKKbkpBTLYFGfKiFL9KZA7hjtpkYp+S1xSckXZTwRF1mQKdF2fktcUvJEKXkmtC6zI7PySWx2XkktZtZ4flSyqbKE2VeZwe9ZFlSyqXIllWo1kWVMWqfKEsnJajWQ5UTdBYtDhwKlycktmfKVqBYTHwNH+Ua53hme4j7KZ1bVVJjbLKSyMZWR7msHAAaBQiN3lP2VzDKOSqqo4443OLjawCWSSVseNt0jpvZ6hknY1xG9djSYQQNxWp7K4BsqaMPZY2C7CDCGhu4Lgx9Vjvyc2bDkb8HGR4VYfCphhn0rtm4S3gCj90i3whd0epj6Zxvpp/DiRhnJP7t+krtDhP0pHCj5AqrqIibWfw4wYdyT+7+S7E4UR8ib3UfIm3MQbafw5AYfyS7ByXX+6j5U3uw+RbcIG2n8OSFByT9g5Lqzhh8iXuwj5Ftwgbafw5XsNvBP2Lkup93HyFN7uPkR3CNt5/Dl+xckl1Hu76EkNwjbeXw+YLDgEyexTKJ64rhNdJMsELMnzoUljBZ07TfdZANVI1pJHd/qgwqNk0WW+pHqVuYXPFGe6+IOvp33fhY0YeTcRx6eBFyfVaNDGJDmlpxEQPiFgD91HJ4O7p1plwju8Oxdwja4P730ZrA8zZbbMfmY0OANvECwIv/AMiNF5o+mbJIySKtDWNGrXEG1uAFgrDaiZ1OBSYjEwsNnTOeWO6WGhXmZOlg3aO5zT/SPUab2ka6V0LpINuADsxMC4t42v1VyHHHhxkmgbGwj4myZj9gPyvMIe2MY2odV0EkxFopZYbuH81tFoS+1MVK2OOaFtVU2/04OTnqd6hLp5p/8ck3CFW1R6F/iajjBIzMaO6TIHtGvA2sij9pKQOIvMzKbESRPF+hIC83d7WDEQ1sNTLhh+Vxbma63RHLHjc9ZG+bGGxOcP3YYdXAbyGjQepTLHkj+nRHtxf5VnpA9oogHu2dRI8WGxDWkdbj/tXo8VhNotsxugJa53eHpdeYsE9MDNUY/O4nfmDCwjoSjdXRVssFVWCpngB/dzCCwP8AMzW3otql6YHhPS341TmTYwy5pQToAd48Lj0UcmLFlUxj542seLE52gn0Jv8AZcdUYy+maaeCgq3UuW7ZYTf113qGmp4K6B8jm1kbLd50kgFzxyW3+iKzyXLFeH4eg9tIsNzSL5jJe/21TCsIgc51y4Gwa0m7j6rzR1TgTgaR9QWloyh8kryYzxHNT4E8wZmUWKzVOlmgEhocTz0VVmdWI8XJ6BTVtRPHmfTSQ7i0l+nO6amrTJI4OmeNdO8xzTyuNVymEy17GyHHJzlYbxPM4sfsAVpvqYrDsrqfvG5eC2/91n1LTF7R0PameMxB4A3H6JLm46toYAXAHo1JDcMbtHzuXckNwmJQ3XtHEGSmugJTIWGg76p7oE90GxlEMOPBG3Mf4jW9SoTJ9RTtlaNcouPEi5SuTKRSXs0oRmble9pJ8QVPFSSZHM2pyngPysptdIPmI9EUeJzNPeOZvAqTU/R0RyYvZptwuo2gaCSw65mEfbVW4cDhNnSTm19Q0a/+rKbjkzdA1luYTy45M+9mgdEj7z4KqXSrlnRw4XTksMk0xDXAkv0zDgtBjKSN8slOyUSObkGzeO43kLrhm1VXV2ZG6U33W/KuxUdVHbbVzIXAfCHEkKMscvcisMuN/mB1kVTh9JGzaUcl2iwMkeYn7p2Y1RRSXpMOyylhaHSaXHK6xKN1YAQ7E2bMDU2ufsVO2SGqlZtcUkLmnu2a0frdRcFfPJa/nH+GtRwwSAV09I2OW9wHyd0dBuVqaXFKxpIo2tiiF85JItxuCqO1igbZzJpW+BJFh9lNSVbRGWxB0cZ3gaXUXfmh9Bo08tXHGJIGAvtY2Nr+pUlZW4g2OMU0bdB345XjVZlfjAp4bRCJrrLNhxGeRj3SvLCdxjYL26lLHFKXLQstK4s6WDEZZmkTUToXFveDw3Jf8o6eodTwP7Q6mja519pE3Lb0XN02KxwAiWd0j/AkAEKSPEoJnOimrI5Yn72VEVyOhBReKXzgnUToY8WpxI6GoxMvOgySMa0f3RGioLPlhoo5nONzmkOU9PBUTS4fNEHOipS0+OT9LJpKqmpIssVPBI0eAF/1KRf1B237L8c5awD3dTs+nONEyzB7Qi2kLG8jENE6bRP+IlI8suUySYr3zyBZk10KdBmHJITanebJWJ0CIROKAytgeqV7HQo9i7km2RGpKAaYxcTvKZIo4wQcxaSFjUJrM3zAdVNAyJrs0hzgfKPFRDK6Ro3AnXktWnFNAA7IHHwJ1KSbpFcUE2TUs0z4yIohFGNG91BSUcr5DNWCzRuDjvPRRTYnNm0Ngq01bLKLOcSOCkoSOmWXGvLuixV1MbXuGx2Z3DIqG0NzvvfemcXOF76c0mEfNuVlCkcs8jkyzFX1EejZXAcLq9DXzSgbSoy8rKjFQyTEbN7BfzFWHYTUxszZ4yR4NcpyUCsHlXPouT1zI2N37TxIVOWvdmvE546lUXudmIdvGiEG6McSQs88myV0rnuLnG5PiltHX3n7oGNL3BoIBPFaUGEucW7Soia0nW2uieTjHyJGM5+CtFWzx/BK4DhdGa+Ym+0IJWxT4RhjXAvkfIeG4FQYvQ07yX0jQ0jeBoCorJByqi7xZVG7M3t1R/uuSUjRTWF6WW/Up1Wokan9MwtTBpUniiG9VIpEIiJRCLiFOkhY6iiIMy7giyPtoL9EQ3p4zvSjJERLm7wUxOcahWn6t14KIAX3LWBoGFjBcuYOSn2rBvAsopNwULtyFWHXp8E8kkJscgHQKIyuIs0d3orFG1pbq0HqFde0CMAAW6INpFFFyV2YxuUyt1gGhsqaomc81ToclJJ29JEUNj3NOjiPVXKd8zmuc1xefFt1nOVulNgLcEklwVxyd0DNEQM53knRV7keCncTd2vipKcDanQb0E6QHG5FcXBFwQVp4bnlnZHuarLmtM7QWgjLwU1GLNJGmqnOdo6MWKpeS6WU9PHbOfUrGqqkCQ7M2HVTVxJbvKyX70MUPbG6jLXCLXbH8QmVRJW0I5e4z//Z"
            />
            <Card 
            descricao="segundo Card"
            />
        </section>

        <section class="flex w-full p-10 items-center justify-around flex-wrap" >
          <Box/>
          
            
        </section>
    </main>
</template>

<script>
import Card from "./Card.vue";
import Box from "./Box.vue";

export default {
    components: { Card, Box }
}
</script>

<style>

</style>