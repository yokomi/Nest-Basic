import { 
	Controller, 
	Delete, 
	Get, 
	Param, 
	Post, 
	Patch,
	Body, 
	Query,
	Req,
	Res
} from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
	constructor(private readonly moviesService: MoviesService){}

	@Get()
	getAll(): Movie[]{
		return this.moviesService.getAll();
	}
	// must put above :id 
	// @Get('search')
	// search(@Query('year') searchYear:string){
	// 	return `We are searching for a movie made after: ${searchYear}`
	// }


	@Get(':id')
	getOne(@Param('id') movieId:number): Movie{
		return this.moviesService.getOne(movieId);
	}

	@Post()
	create(@Body() movieData: CreateMovieDto){
		return this.moviesService.createMovie(movieData);
	}

	@Delete(":id")
	remove(@Param('id') movieId:number){
		return this.moviesService.deleteOne(movieId);
	}

	@Patch(':id')
	patch(@Param('id') movieId:number, @Body() updateData:UpdateMovieDto){
		return this.moviesService.update(movieId, updateData);
	}

	
}
