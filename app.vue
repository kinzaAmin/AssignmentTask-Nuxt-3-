<script>
export default {
	data() {
		return {
			showDropdown: false,
			selectedRegion: "", // Initialize selected region
		};
	},
	methods: {
		toggleDropdown() {
			this.showDropdown = !this.showDropdown;
		},
		selectRegion(region) {
			this.selectedRegion = region;
			this.updateRegion();
		},
		updateRegion() {
			// Update URL based on the selected region
			this.$router.push(`/en-${this.selectedRegion.toLowerCase()}`);
		},
		isSelected(region) {
			return this.selectedRegion === region;
		},
	},
};
</script>

<template>
	<div class="container">
		<div class="nav">
			<h2>Netsole</h2>
			<button class="btn" @click="toggleDropdown">Regions</button>
		</div>

		<!-- Dropdown menu -->
			<div v-if="showDropdown" class="dropdown-menu">
				<ul>
					<li
						@click="selectRegion('us')"
						:class="{ selected: selectedRegion === 'us' }"
					>
						USA
					</li>
					<li
						@click="selectRegion('uk')"
						:class="{ selected: selectedRegion === 'uk' }"
					>
						UK
					</li>
					<li
						@click="selectRegion('cn')"
						:class="{ selected: selectedRegion === 'cn' }"
					>
						China
					</li>
					<li
						@click="selectRegion('pk')"
						:class="{ selected: selectedRegion === 'pk' }"
					>
						Pakistan
					</li>
				</ul>
			</div>
		<div class="content-container">
			<span>News and Insights</span>
			<div>
				<h1>Latest Insights from Leading Voices</h1>
				<p>
					Solving the world’s problems through technology wouldn’t be possible
					without our most important invention: the NetSol. Have a look at our
					talented teams.
				</p>
			</div>
		</div>
		<div class="card-container">
			<div class="card">
				<img src="/assets/img1.png" class="card-img-top" alt="Card image" />
				<div class="card-body">
					<span class="card-btn">NEWS</span>
					<h5 class="card-title">Leasing Life Conference & Awards</h5>
					<p class="card-text">
						Solving the world’s problems through technology wouldn’t be possible
						without our most important invention.
					</p>
				</div>
			</div>

			<div class="card">
				<img src="/assets/img2.png" class="card-img-top" alt="Card image" />
				<div class="card-body">
					<span class="card-btn">BLOG</span>
					<h5 class="card-title">Auto Finance Summit 2023</h5>
					<p class="card-text">
						Solving the world’s problems through technology wouldn’t be possible
						without our most important invention.
					</p>
				</div>
			</div>

			<div class="card">
				<img src="/assets/img3.png" class="card-img-top" alt="Card image" />
				<div class="card-body">
					<span class="card-btn">NEWS</span>
					<h5 class="card-title">Careers at Netsol</h5>
					<p class="card-text">
						Solving the world’s problems through technology wouldn’t be possible
						without our most important invention.
					</p>
				</div>
			</div>

			<div class="card">
				<img src="/assets/img4.png" class="card-img-top" alt="Card image" />
				<div class="card-body">
					<span class="card-btn">BLOG</span>
					<h5 class="card-title">Leasing Life Conference & Awards</h5>
					<p class="card-text">
						Solving the world’s problems through technology wouldn’t be possible
						without our most important invention.
					</p>
				</div>
			</div>
		</div>
	</div>
</template>
