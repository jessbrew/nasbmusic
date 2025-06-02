<template>
    <v-container class="carouselContainer" fluid>
        <v-carousel cycle hide-delimiter-background height="500">
            <v-carousel-item
                v-for="i in 14"
                :key="i"
                :src="`/singers_${i}.jpeg`"
                cover
            />
        </v-carousel>
    </v-container>

    <v-container class="infoSection" fluid>
        <v-row justify="center">
            <v-col cols="12" md="8" class="text-center">
            <p class="infoText">
                The Nord-Amerikanischer Sängerbund Music Library is a shared resource for member choirs to explore, access, and contribute choral music. Here you'll find public domain works and submissions from fellow choirs across North America. Whether you're searching for a classic piece or uploading your ensemble's favorite arrangement, this site helps preserve and share our musical tradition.
            </p>
            </v-col>
        </v-row>
    </v-container>
</template>

<style scoped>
.carouselContainer {
    padding-top: 24px;
    padding-bottom: 24px;
}
.infoSection {
  margin-top: 40px;
  margin-bottom: 40px;
}

.infoText {
  font-size: 16px;
  color: #334155;
  line-height: 1.6;
}
</style>